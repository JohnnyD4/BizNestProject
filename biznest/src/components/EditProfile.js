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
import axios from 'axios';

class EditProfile extends Component {

    componentDidMount() {
        console.log("obj");
        if(this.props.location.search === "") {

            axios.post('http://localhost:4000/facebook/profile',  
            {userID: this.props.location.pathname})
            

            .then(function(result) {
                console.log(result.data[0]);
                var userData = result.data[0];
                console.log(userData.name);
                document.getElementById("userName").setAttribute("placeholder", userData.name);
                // document.getElementById("userName").innerHTML = userData.name;
                // document.getElementById("bio").innerHTML = userData.biography;
                // document.getElementById("portfolio").setAttribute("href", userData.portfolio);
                // document.getElementById("phoneNumber").setAttribute("value", userData.work_phone);
                // document.getElementById("profilePic").setAttribute("src", userData.profile_image);
                // document.getElementById("facebook").setAttribute("href", userData.facebook);

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
                  
                document.getElementById("userName").setAttribute("placeholder", userData.name);
                // document.getElementById("bio").innerHTML = userData.biography;
                // document.getElementById("portfolio").setAttribute("href", userData.portfolio);
                // document.getElementById("phoneNumber").setAttribute("value", userData.work_phone);
                // document.getElementById("profilePic").setAttribute("src", userData.profile_image);
                // document.getElementById("facebook").setAttribute("href", userData.facebook);
            })

            .catch(function(err) {
                if (err) throw err;
            })
        }
        // axios.get('http://localhost:4000/facebook/login')
        // .then(function(response) {
        //     console.log(response.data);
        //     document.getElementById("userName").setAttribute("value", response.data.name);
        //     document.getElementById("bio").innerHTML = response.data.biography;
        //     document.getElementById("portfolio").setAttribute("href", response.data.portfolio);
        //     document.getElementById("phoneNumber").setAttribute("value", response.data.work_phone);
        //     document.getElementById("profilePic").setAttribute("src", response.data.profile_image);
        //     document.getElementById("facebook").setAttribute("href", response.data.facebook);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
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
                <h1>Edit</h1>
            </div>

            <div className="sideNav" id="mySideNav">
                <a href="javascript:void(0)" onClick={this.hideSideNav} id="closeNavBtn">&times;</a>
                <input type="text" id="searchBar" placeholder="Search in Contacts"/>
                <a href="#" id="sideName" className="sideStyle"></a>
                <Link to="/Contacts" className="sideStyle">Contacts</Link>
                <a href="#" className="sideStyle">Groups</a>
                <a href="#" className="sideStyle">Add Friend</a>
                <a href="#" className="sideStyle">Settings</a>
                <a href="/" onClick={ this.logoutFacebook.bind(this) }>Logout</a>
            </div>

            <div className="container profilePage">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="profilePic">
                            <p className="imgP">click on photo to change</p>
                            <img className="editProfileImage" alt="Profile" src="http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png"/>

                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="profileInfo">
                            <div className="clientName">
                                <p>Your Name</p>
                                <input type="text" id="userName" className="editName"/>
                            </div>
                            <div className="icons">
                                <a href="#"><img className="icon" alt="Phone Icon" src={phone}/></a>
                                <input type="text" id="phoneNumber" className="editName" value="954-258-4340"/>
                                <a href="#"><img className="icon" alt="Text Icon" src={text}/></a>
                                <input type="text" className="editName" value="954-434-2140" />
                                <a href="#"><img className="icon" alt="Email Icon" src={email}/></a>
                                <input type="text" className="editName" value="JohnSDavis95@gmail.com" />


                            </div>
                            <div className="editSave">
                                <Link to={{pathname: "/profile/" + route}} id="editBtn" className="edit">Save</Link>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h4>Bio</h4>
                        <textarea type="text" id="bio" className="editTextArea" className="text-area" value="I am a web developer for Code For Kids. I have 4 years of experience. My main focus is on Front-end, but have experience in Back-end."/>
                        <p>portfolio link <input type="text" className="editName" value="http://codepen.com"/></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-3">
                        <ul className="list">
                            <li className="social"><a href="#"><img className="icon" alt="LinkedIn" src={LinkedIn}/>LinkedIn</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="GitHub" src={GitHub}/>GitHub</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Google+" src={Google}/>Google+</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Twitter" src={Twitter}/>Twitter</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Facebook" src={Facebook}/>Facebook</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Youtube" src={Youtube}/>Youtube</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Instagram" src={Instagram}/>Instagram</a><input type="text" className="editName"/></li>
                            <li className="social"><a href="#"><img className="icon" alt="Pinterest" src={Pinterest}/>Pinterest</a><input type="text" className="editName"/></li>
                            <li className="socail"><a href="#"><img className="icon" alt="Tumblr" src={Tumblr}/>Tumblr</a><input type="text" className="editName"/></li>
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
