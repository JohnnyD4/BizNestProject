// 'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import LoginHOC from 'react-facebook-login-hoc';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
 
class MyComponent extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          user: ""
        };

        this.responseFacebook = this.responseFacebook.bind(this);
    }

    responseFacebook(response) {
        this.setState({
            user: response.userID
        })

        console.log(this.state.user);

        axios.post('http://localhost:4000/facebook/login',  
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
            <div className="entryPage">
                <h1>BizNest</h1>
                <img src="http://clipartix.com/wp-content/uploads/2016/10/Vintage-beehive-clipart-free-images.png" alt="bee"/>            
                <Link id="linker" to={{pathname: 'profile/?' + this.state.user}}><button className="signBtn" id="buttonSignUp">Login as</button></Link>
                
            </div>
                
                
        </div>    
    )
  }
}
 
export default MyComponent;

