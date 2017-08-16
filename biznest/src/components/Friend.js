import React, { Component } from 'react';
// import './bootstrap.css';
import {Link} from 'react-router-dom';
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

class Friend extends Component {
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

    showUserPhone() {
        // var phoneNumber = document.getElementById("phoneNumber").getAttribute("value");
        // console.log(phoneNumber);
    }

    showUserCellPhone() {
        
        // console.log(cellNumber);
    }

    showUserEmail() {
        
        // console.log(emailAddress);
    }

    logoutFacebook() {
        this.logout()
        console.log("logged out");
    };

    componentDidMount() {
        // console.log(this.props.location.search);
        console.log(this.props);

        if(this.props.location.search === "") {

			var paths = this.props.location.pathname.split("/");

			var friendName = paths[3];

			var userPath = paths[2]

			// console.log(friendName);
			// console.log("pathname", userPath[2]);
            axios.post('http://localhost:4000/getFriendProfile',  
            {
            	userID: userPath,
            	friendName: friendName
            })
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
                // 	console.log(userData.name);
                document.getElementById("userName").innerHTML = userData.name;
                document.getElementById("bio").innerHTML = userData.biography;
                document.getElementById("portfolio").setAttribute("href", userData.portfolio);
                document.getElementById("phoneNumber").setAttribute("value", userData.work_phone);
                document.getElementById("profilePic").setAttribute("src", userData.profile_image);
                document.getElementById("facebook").setAttribute("href", userData.facebook);
                document.getElementById("linkedin").setAttribute("href", userData.linkedin);
                document.getElementById("google").setAttribute("href", userData.google);
                document.getElementById("github").setAttribute("href", userData.github);
                document.getElementById("twitter").setAttribute("href", userData.twitter);
                document.getElementById("pinterest").setAttribute("href", userData.pinterest);
                document.getElementById("instagram").setAttribute("href", userData.instagram);
                document.getElementById("tumblr").setAttribute("href", userData.tumblr);
                document.getElementById("google").setAttribute("href", userData.google);
                document.getElementById("mailto").setAttribute("href", "mailto:" + userData.email_address);
                document.getElementById("tel").setAttribute("href", "tel:" + userData.work_phone);

            })

            .catch(function(err) {
                if (err) throw err;
            })
        } else {

        	var userPath = this.props.location.search.split("/");

			console.log("search", userPath);

            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.search})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
                console.log(userData.name);
                  
                document.getElementById("userName").innerHTML = userData.name;
                document.getElementById("bio").innerHTML = userData.biography;
                document.getElementById("portfolio").setAttribute("href", userData.portfolio);
                document.getElementById("phoneNumber").setAttribute("value", userData.work_phone);
                document.getElementById("profilePic").setAttribute("src", userData.profile_image);
                document.getElementById("facebook").setAttribute("href", userData.facebook);
                document.getElementById("linkedin").setAttribute("href", userData.linkedin);
                document.getElementById("google").setAttribute("href", userData.google);
                document.getElementById("github").setAttribute("href", userData.github);
                document.getElementById("twitter").setAttribute("href", userData.twitter);
                document.getElementById("pinterest").setAttribute("href", userData.pinterest);
                document.getElementById("instagram").setAttribute("href", userData.instagram);
                document.getElementById("tumblr").setAttribute("href", userData.tumblr);
                document.getElementById("google").setAttribute("href", userData.google);
                document.getElementById("mailto").setAttribute("href", "mailto:" + userData.email_address);
                document.getElementById("tel").setAttribute("href", "tel:" + userData.work_phone);

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
        route = router[1];
    } else {
        route = this.props.location.search;
        console.log("search", this.props.location.search);
    }
    return (
        <div>
            <div className="navbar">
                <span onClick={this.showSideNav} id="hamburger">&#9776;</span>
                <h1>Profile</h1>
            </div>

            <div className="sideNav" id="mySideNav">
                <a href="javascript:void(0)" onClick={this.hideSideNav} id="closeNavBtn">&times;</a>
                <input type="text" id="searchBar" placeholder="Search in Contacts"/>
                <a href="#" id="sideName" className="sideStyle"></a>
                <Link to={{pathname: "/profile/?" + route}} className="sideStyle">Profile</Link>
                <Link to={{pathname: "/Contacts/?" + route}} className="sideStyle">Contacts</Link>
                <Link to={{pathname: "/AddFriend/?" + route}} className="sideStyle">Add Friend</Link>
                <a href="/" onClick={ this.logoutFacebook.bind(this) }>Logout</a>
            </div>

            <div className="container profilePage">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="profilePic">
                            <img className="profileImage" alt="Profile" id="profilePic"/>

                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="profileInfo">
                            <div className="clientName">
                                <h3 onClick={this.fetchUserData} id="userName"></h3>
                            </div>
                            <div className="icons">
                                <a id="tel" href="#" ><img className="icon" alt="Phone Icon" id="phoneNumber" onClick={this.showUserPhone} src={phone}/></a>
                                <a href="#" onClick={this.showUserCellPhone}><img className="icon" alt="Text Icon" id="cellNumber" value={this.props.cellPhone} src={text}/></a>
    							<a id="mailto" href="#">
    								<img className="icon" alt="Email Icon" id="emailAddress" value={this.props.email} src={email}/>
    							</a>

                            </div>                           

                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h3><b>Bio</b></h3>
                        <p id="bio">{this.props.bio}</p>
                        <a id="portfolio"><p>Check out my portfolio</p></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <ul className="list">
                            <h3>Professional</h3>
                            <li className="social"><a id="linkedin" href={this.props.linkedin}><img className="icon" alt="LinkedIn" src={LinkedIn}/>LinkedIn</a></li>
                            <li className="social"><a id="github" href={this.props.github}><img className="icon" alt="GitHub" src={GitHub}/>GitHub</a></li>
                            <li className="social"><a id="google" href={this.props.google}><img className="icon" alt="Google+" src={Google}/>Google+</a></li>
                            
                        </ul>

                    </div>
                    <div className="col-xs-6">
                        <ul className="list">
                            <h3>Social</h3>
                            <li className="social"><a id="twitter" href={this.props.twitter}><img className="icon" alt="Twitter" src={Twitter}/>Twitter</a></li>
                            <li className="social"><a id="facebook"><img className="icon" alt="Facebook" src={Facebook}/>Facebook</a></li>
                            <li className="social"><a id="youtube" href={this.props.youtube}><img className="icon" alt="YouTube" src={Youtube}/>Youtube</a></li>
                            <li className="social"><a id="instagram" href={this.props.instagram}><img className="icon" alt="Instagram" src={Instagram}/>Instagram</a></li>
                            <li className="social"><a id="pinterest" href={this.props.pinterest}><img className="icon" alt="Pinterest" src={Pinterest}/>Pinterest</a></li>
                            <li className="socail"><a id="tumblr" href={this.props.tumblr}><img className="icon" alt="Tumblr" src={Tumblr}/>Tumblr</a></li>

                        </ul>

                    </div>
                </div>
                
            </div>
        </div>    
    );

  }
}

export default LoginHOC(configureLoginProps)(Friend);
