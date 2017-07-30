import React, { Component } from 'react';
// import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

class Login extends Component {
  render() {
    return (
    	<div>
	    	<div className = "navbar">
	            <h1>BizNest</h1>
	      	</div>
	      	<div className="signUpPage">
	            <h2>Login</h2>
	            
	              {/*<form id="signUpForm" method="post">*/}
	              	<div className="signUpDiv">
		                <input type="text" id="emailAddress" name="email" placeholder="Email Address" required="required"/>

		                <input type="password" id="password" name="pass" placeholder="Create Password" required="required"/>

		                
					</div>
					<Link to="/profile"><button className="btn btn-primary" id="buttonSignUp" type="submit">Login</button></Link> 
	              {/*</form> */}
	             
	        </div>
	    </div>
    );
  }
}

export default Login;
