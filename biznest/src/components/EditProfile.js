import React, { Component } from 'react';
// import logo from '../logo.svg';
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

class EditProfile extends Component {
  render() {
    return (
        <div>
            {/*<div className="navbar">
                            <span id="hamburger">&#9776;</span>
                            <h1>Profile</h1>
                        </div> */}

            <div className="sideNav" id="mySideNav">
                <a href="javascript:void(0)" id="closeNavBtn">&times;</a>
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
                            <p className="imgP">click on photo to change</p>
                            <img className="editProfileImage" src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"/>

                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="profileInfo">
                            <div className="clientName">
                                <p>Your Name</p>
                                <input type="text" id="editName" value="John Davis"/>
                            </div>
                            <div className="icons">
                                <a href="#"><img className="icon" src={phone}/></a>
                                <input type="text" id="editName" value="954-434-4340"/>
                                <a href="#"><img className="icon" src={text}/></a>
                                <input type="text" id="editName" value="954-258-4340"/>
                                <a href="#"><img className="icon" src={email}/></a>
                                <input type="text" id="editName" value="johnsdavis95@gmail.com"/>


                            </div>
                            <div className="editSave">
                                <Link to="/profile" id="editBtn" className="edit">Save</Link>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h4>Bio</h4>
                        <textarea type="text" id="editName" className="text-area" value="I am a web developer for Code For Kids. I have 4 years of experience. My main focus is on Front-end, but have experience in Back-end."/>
                        <p>portfolio link <input type="text" id="editName" value="http://codepen.com"/></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                        <ul className="list">
                            <li className="social"><a href="#"><img className="icon" src={LinkedIn}/>LinkedIn</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={GitHub}/>GitHub</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Google}/>Google+</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Twitter}/>Twitter</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Facebook}/>Facebook</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Youtube}/>Youtube</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Instagram}/>Instagram</a><input type="text" id="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" src={Pinterest}/>Pinterest</a><input type="text" id="editName"/></li>
                            <li className="socail"><a href="#"><img className="icon" src={Tumblr}/>Tumblr</a><input type="text" id="editName"/></li>
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
