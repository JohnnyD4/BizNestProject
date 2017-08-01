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


class Profile extends Component {
    constructor(props) {
        super(props);
        this.props.
    }

    showSideNav(event) {
        document.getElementById("mySideNav").style.width = "250px";
    }

    hideSideNav(event) {
        document.getElementById("mySideNav").style.width = "0px";
    }

    fetchUserData() {
        return fetch('http://localhost:4000/api/login')
          
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
    }

  render() {
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
                <a href="#" className="sideStyle">Contacts</a>
                <a href="#" className="sideStyle">Groups</a>
                <a href="#" className="sideStyle">Add Friend</a>
                <a href="#" className="sideStyle">Settings</a>
            </div>

            <div className="container profilePage">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="profilePic">
                            <img className="profileImage" alt="Profile" src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"/>

                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="profileInfo">
                            <div className="clientName">
                                <h3 id="userName">John Davis</h3>
                            </div>
                            <div className="icons">
                                <a href="#"><img className="icon" alt="Phone Icon" src={phone}/></a>
                                <a href="#"><img className="icon" alt="Text Icon" src={text}/></a>
                                <a href="#"><img className="icon" alt="Email Icon" src={email}/></a>


                            </div>
                            <div className="editSave">
                                <Link to="/EditProfile" className="edit">Edit Profile</Link>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h4>Bio</h4>
                        <p>I am a web developer for Code For Kids. I have 4 years of experience. My main focus is on Front-end, but have experience in Back-end. </p>
                        <a href="#"><p>Check out my portfolio</p></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                        <ul className="list">
                            <li className="social"><a href="#"><img className="icon" alt="LinkedIn" src={LinkedIn}/>LinkedIn</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="GitHub" src={GitHub}/>GitHub</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="Google+" src={Google}/>Google+</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="Twitter" src={Twitter}/>Twitter</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="Facebook" src={Facebook}/>Facebook</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="YouTube" src={Youtube}/>Youtube</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="Instagram" src={Instagram}/>Instagram</a></li>
                            <li className="social"><a href="#"><img className="icon" alt="Pinterest" src={Pinterest}/>Pinterest</a></li>
                            <li className="socail"><a href="#"><img className="icon" alt="Tumblr" src={Tumblr}/>Tumblr</a></li>
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

export default Profile;
