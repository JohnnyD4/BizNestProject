// 'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import LoginHOC from 'react-facebook-login-hoc';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
 
class MyComponent extends React.Component {
    
    constructor(props) {
        super(props)
        
    }
    
    responseFacebook(response) {
        // var test = this;
       // document.getElementbyId("buttonSignUp").innerHTML = response.name;
        // this.props.name = response.name; 
        console.log("response", response.userID);
        axios.post('http://localhost:4000/facebook/login/' + response.userID,  
        response)
        

        .then(function(result) {
            // console.log(result.data[0]);
            document.getElementById("buttonSignUp").innerHTML = "Log in as " + result.data[0].name;
            // document.getElementbyId("linker").setAttri
            var userID = response.userID

        })

        .catch(function(err) {
            if (err) throw err;
        })      
    }



    logout(response) {
   // Person is now logged out
    };
 
  render() {
    return (
        <div className="signupPage">
            <div className="facebookLogin">
                <Link to="/profile"><FacebookLogin
                    appId="490135684667453"
                    autoLoad={true}
                    fields="name,picture"
                    callback={this.responseFacebook}
                /></Link>
            </div>    
                <Link id="linker" to={{pathname: 'profile/1805067389507703'}}><button className="signBtn" id="buttonSignUp">Login as</button></Link>
        </div>    
    )
  }
}
 
export default MyComponent;

