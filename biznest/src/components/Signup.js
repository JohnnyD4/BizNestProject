import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import './App.css';

class Signup extends Component {
  render() {
    return (
        <div className="signUpPage">
            <h2>Sign Up for BizNest</h2>
           
                {/*<form id="signUpForm" method="post"> */}
                    <div className="signUpDiv">
                        <input type="text" id="firstName" name="first" placeholder="First Name" required="required"/>
                        <input type="text" id="lastName" name="last" placeholder="Last Name" required="required"/>

                        <input type="text" id="emailAddress" name="email" placeholder="Email Address" required="required"/>

                        <input type="password" id="password" name="pass" placeholder="Create Password" required="required"/>
                        <input type="password" id="verifyPassword" name="repeat" placeholder="Verify Password" required="required"/>

                
                    </div> 
                    <Link to="/Profile"><button className="btn btn-primary" id="buttonSignUp" type="submit" form="signUpForm" name="signUpButton" value="submit">Create Profile</button></Link>
             {/* </form> */}
             
        </div>
    );
  }
}

export default Signup;
