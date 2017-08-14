import React, { Component } from 'react';
// import './bootstrap.css';
import {Link} from 'react-router-dom';
import './App.css';
import Login from './Login';
import LoginHOC from 'react-facebook-login-hoc';
import axios from 'axios';

const configureLoginProps = {
  scope: 'public_profile, email',
  xfbml: false,
  cookie: false,
  version: 2.6,
  language: 'en_US',
  appId: '490135684667453'
}



class Contacts extends Component {
    constructor(props) {
        super(props);
        this.logout = this.props.fb.logout;

    }

    showSideNav(event) {
        document.getElementById("mySideNav").style.width = "250px";
    }

    hideSideNav(event) {
        document.getElementById("mySideNav").style.width = "0px";
    }

    logoutFacebook() {
        this.logout()
        console.log("logged out");
    };

    searchUser(event) {
        console.log("hello");
    }

componentDidMount() {
        // console.log(this.props.location.search);
        console.log("props", this.props);

        if(this.props.location.search === "") {

            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.pathname})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];

                if (userData.contacts === null) {
                    
                } else {
                    var userList = userData.contacts.split(",");
                    console.log(userList); 
                    for (var i = 0; i < userList.length; i++) {
                        var newList = document.createElement("LI");
                        newList.classList.add("listContacts");
                        var linkTo = document.createElement("a");
                        var h3 = document.createElement("h2");
                        var hr = document.createElement("hr");
                        linkTo.setAttribute("href", "/Friend/" + userList[i]);
                        var contacts = document.createTextNode(userList[i].split("/")[1]);
                        h3.appendChild(contacts);
                        linkTo.appendChild(h3);
                        newList.appendChild(linkTo);
                        // newList.appendChild(hr);
                        document.getElementById("contactList").appendChild(newList)

                    }
                }    

            })

            .catch(function(err) {
                if (err) throw err;
            })
        } else {
            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.search})
            

            .then(function(result) {
                console.log(result.data[0].contacts);
                // console.log("obj", this.props);
                var userData = result.data[0];

                if (userData.contacts === null) {
                    
                } else {

                    var userList = userData.contacts.split(",");
                    console.log(userList);
                    var splitList = userList[0].split("-");
                    
                    
                    for (var i = 0; i < userList.length; i++) {
                        var newList = document.createElement("LI");
                        newList.classList.add("listContacts");
                        var linkTo = document.createElement("a");
                        var h3 = document.createElement("h2");
                        var hr = document.createElement("hr");
                        linkTo.setAttribute("href", "/Friend/" + userList[i]);
                        var contacts = document.createTextNode(userList[i].split("/")[1]);
                        h3.appendChild(contacts);
                        linkTo.appendChild(h3);
                        newList.appendChild(linkTo);
                        // newList.appendChild(hr);
                        document.getElementById("contactList").appendChild(newList)

                    }
                }
                
                 

            })

            .catch(function(err) {
                if (err) throw err;
            })
        }

    }

  render() {
    var path;
    var route;
    var router;
    if (this.props.location.search === "") {
        path = this.props.location.pathname;
        console.log(path.split("/").reverse());
        console.log("pathname", this.props.location.pathname);
        router = path.split("/").reverse();
        route = router[0];
    } else {
        route = this.props.location.search;
        console.log("search", this.props.location.search);
    }
    return (

        <div>
            <div className="navbar">
                <span onClick={this.showSideNav} id="hamburger">&#9776;</span>
                <h1>Contacts</h1>
            </div>

            <div className="sideNav" id="mySideNav">
                <a href="javascript:void(0)" onClick={this.hideSideNav} id="closeNavBtn">&times;</a>
                <input type="text" id="searchBar" placeholder="Search in Contacts"/>
                <a href="#" id="sideName" className="sideStyle"></a>
                <Link to={{pathname: "/profile/" + route}} className="sideStyle">Profile</Link>
                <Link to={{pathname: "/Contacts/" + route}} className="sideStyle">Contacts</Link>
                <Link to={{pathname: "/AddFriend/" + route}} className="sideStyle">Add Friend</Link>
                <a href="/" onClick={ this.logoutFacebook.bind(this) }>Logout</a>
            </div>

            <div className="container profilePage">
                
                    <ul id="contactList"></ul>
                
                
            </div>
        </div>    
    );

  }
}


export default LoginHOC(configureLoginProps)(Contacts);
