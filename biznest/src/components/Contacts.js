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

componentDidMount() {
        // console.log(this.props.location.search);
        console.log(this.props);

         if(this.props.location.search === "") {

            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.pathname})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
               console.log(userData.contacts.split(','));
               document.getElementById("contactList").innerHTML = userData.contacts.split(',');

            })

            .catch(function(err) {
                if (err) throw err;
            })
        } else {
            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.search})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
                var userList = userData.contacts.split(',')
                for (var i = 0; i < userList.length; i++) {
                    document.getElementById("contactList").innerHTML = userData.contacts.split(',')[i];     
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
                <Link to="/Profile" className="sideStyle">Profile</Link>
                <a href="#" className="sideStyle">Groups</a>
                <a href="#" className="sideStyle">Add Friend</a>
                <a href="#" className="sideStyle">Settings</a>
                <a href="/" onClick={ this.logoutFacebook.bind(this) }>Logout</a>
            </div>

            <div className="container profilePage">
                <ul>
                    <li id="contactList"></li>
                </ul>
                
            </div>
        </div>    
    );

  }
}


export default LoginHOC(configureLoginProps)(Contacts);
