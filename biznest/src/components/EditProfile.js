import React, { Component } from 'react';
// import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SimpleInput from 'react-simple-input';
import phone from '../images/phoneIcon.png';
import text from '../images/textIcon.png';
import email from '../images/emailIcon.png';
import LinkedIn from '../images/Linkedin.png';
import GitHub from '../images/Github.png';
import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import Google from '../images/Google+.png';
import Youtube from '../images/YouTube.png';
import Instagram from '../images/Instagram.png';
import Pinterest from '../images/Pinterest.png';
import Tumblr from '../images/Tumblr.png';
import './App.css';
import axios from 'axios';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        if(this.props.location.search === "") {
            var splitID = this.props.location.pathname.split("?").reverse()[0]
            this.state = {
                userID: splitID
            };
        } else {
            var splitID = this.props.location.search.split("?").reverse()[0]
            this.state = {
                userID: splitID
            };
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        console.log(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ term: "" });
        console.log("CLICK");
        console.log(this.state);
        // this.props.setTerm(this.state.term);
        
        axios.post("http://localhost:4000/editProfile", this.state) 

        .then(function(result) {
            console.log(result);
        })

    }


    componentDidMount() {
        console.log("obj");
        if(this.props.location.search === "") {

            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.pathname})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
                console.log(userData.portfolio);
                
                document.getElementById("userName").innerHTML = userData.name;
                document.getElementById("portfolio").setAttribute("placeholder", userData.portfolio);
                document.getElementById("bio").setAttribute("placeholder", userData.biography);
                document.getElementById("phoneNumber").setAttribute("placeholder", userData.work_phone);
                document.getElementById("textNumber").setAttribute("placeholder", userData.text_phone);
                document.getElementById("emailAddress").setAttribute("placeholder", userData.email_address);
                document.getElementById("portfolio").setAttribute("placeholder", userData.portfolio);
                document.getElementById("linkedin").setAttribute("placeholder", userData.linkedin);
                document.getElementById("github").setAttribute("placeholder", userData.github);
                document.getElementById("google").setAttribute("placeholder", userData.google);
                document.getElementById("facebook").setAttribute("placeholder", userData.facebook);
                document.getElementById("twitter").setAttribute("placeholder", userData.twitter);
                document.getElementById("instagram").setAttribute("placeholder", userData.instagram);
                document.getElementById("pinterest").setAttribute("placeholder", userData.pinterest);
                document.getElementById("youtube").setAttribute("placeholder", userData.youtube);
                document.getElementById("tumblr").setAttribute("placeholder", userData.tumblr);
                document.getElementById("profilePicture").setAttribute("placeholder", userData.profile_image);
                document.getElementById("editImage").setAttribute("src", userData.profile_image);

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
                console.log(userData.name);
                  
                document.getElementById("userName").innerHTML = userData.name;
                document.getElementById("portfolio").setAttribute("placeholder", userData.portfolio);
                document.getElementById("bio").setAttribute("placeholder", userData.biography);
                document.getElementById("phoneNumber").setAttribute("placeholder", userData.work_phone);
                document.getElementById("textNumber").setAttribute("placeholder", userData.text_phone);
                document.getElementById("emailAddress").setAttribute("placeholder", userData.email_address);
                document.getElementById("portfolio").setAttribute("placeholder", userData.portfolio);
                document.getElementById("linkedin").setAttribute("placeholder", userData.linkedin);
                document.getElementById("github").setAttribute("placeholder", userData.github);
                document.getElementById("google").setAttribute("placeholder", userData.google);
                document.getElementById("facebook").setAttribute("placeholder", userData.facebook);
                document.getElementById("twitter").setAttribute("placeholder", userData.twitter);
                document.getElementById("instagram").setAttribute("placeholder", userData.instagram);
                document.getElementById("pinterest").setAttribute("placeholder", userData.pinterest);
                document.getElementById("youtube").setAttribute("placeholder", userData.youtube);
                document.getElementById("tumblr").setAttribute("placeholder", userData.tumblr);
                document.getElementById("profilePicture").setAttribute("placeholder", userData.profile_image);
                document.getElementById("editImage").setAttribute("src", userData.profile_image);
               
            })

            .catch(function(err) {
                if (err) throw err;
            })
        }

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

  render() {
    var path;
    var route;
    var router;
    if (this.props.location.search === "") {
        path = this.props.location.pathname;
        // console.log(path.split("/").reverse());
        // console.log("pathname", this.props.location.pathname);
        router = path.split("/").reverse();
        route = router[0];
    } else {
        route = this.props.location.search;
        // console.log("search", this.props.location.search);
    }
    return (
        <div>
            <div className="navbar">
                <span onClick={this.showSideNav} id="hamburger">&#9776;</span>
                <h1>Edit</h1>
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
                
                <div className="row">
                    <div className="col-sm-4">
                        <div className="profilePic">
                            
                            
                            <img className="editProfileImage" id="editImage" alt="Profile" src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"/>

                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="profileInfo">
                            <div className="clientName">
                                <h4 id="userName"></h4>
                                
                                
                                
                            </div>
                            <div className="icons">
                                <a href="#"><img className="icon" alt="Phone Icon" src={phone}/></a>
                                <input type="text" id="phoneNumber" className="editName" value={this.state.newState} onChange={this.handleChange}/>
                                <a href="#"><img className="icon" alt="Text Icon" src={text}/></a>
                                <input type="text" id="textNumber" className="editName" value={this.state.newState} onChange={this.handleChange}/>
                                <a href="#"><img className="icon" alt="Email Icon" src={email}/></a>
                                <input type="text" id="emailAddress" className="editName" value={this.state.newState} onChange={this.handleChange}/>
                                <p>Image Link</p>
                                <input type="text" id="profilePicture" className="editName" value={this.state.newState} onChange={this.handleChange}/>

                            </div>
                            <div className="editSave">
                            <form onSubmit = {this.handleSubmit}>
                                <Link to={{pathname: "/profile/" + route}} id="editBtn" className="">Profile</Link>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>    
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h4>Bio</h4>
                        <textarea type="text" id="bio" className="editTextArea" className="text-area" value={this.state.newState} onChange={this.handleChange}/>
                        <p>portfolio link <input type="text" id="portfolio" className="editName" value={this.state.newState} onChange={this.handleChange}/></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                        <ul className="list">
                            <li className="social"><a href="#"><img className="icon" alt="LinkedIn" src={LinkedIn}/>LinkedIn</a><input type="text" id="linkedin" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="GitHub" src={GitHub}/>GitHub</a><input type="text" id="github" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Google+" src={Google}/>Google+</a><input type="text" id="google" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Twitter" src={Twitter}/>Twitter</a><input type="text" id="twitter" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Facebook" src={Facebook}/>Facebook</a><input type="text" id="facebook" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Youtube" src={Youtube}/>Youtube</a><input type="text" id="youtube" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Instagram" src={Instagram}/>Instagram</a><input type="text" id="instagram" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Pinterest" src={Pinterest}/>Pinterest</a><input type="text" id="pinterest" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                            <li className="socail"><a href="#"><img className="icon" alt="Tumblr" src={Tumblr}/>Tumblr</a><input type="text" id="tumblr" className="editName" value={this.state.newState} onChange={this.handleChange}/></li>
                        </ul>

                    </div>

                    <div className="col-xs-8">
                        <div className="images">
                            
                        </div>
                    </div>
                </div>
            
            </div>
        </div>    
    );
  }
}

export default EditProfile;
