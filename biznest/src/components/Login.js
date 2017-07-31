import React, { Component } from 'react';
// import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

class Login extends Component {

	constructor(props) {
	    super(props);
	    this.state = {emailAddress: '', password: ''};

	    this.emailHandleChange = this.emailHandleChange.bind(this);
	    this.passwordHandleChange = this.passwordHandleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	emailHandleChange(event) {
    	this.setState({emailAddress: event.target.value});
  	}

  	passwordHandleChange(event) {
    	this.setState({password: event.target.value});
  	}

  	handleSubmit(event) {
   		console.log('A name was submitted: ' + this.state.emailAddress + ' ' + this.state.password);
    	event.preventDefault();

    	 fetch('http://localhost:4000/login')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        console.log("helo");
	      })
	      .catch((error) => {
	        console.error(error);
	      });
  	}

  render() {
    return (
    	<div>
	    	<div className = "navbar">
	            <h1>BizNest</h1>
	      	</div>
	      	<div className="signUpPage">
	            <h2>Login</h2>
	            
	              	<form id="signUpForm" onSubmit={this.handleSubmit}>
		              	<div className="signUpDiv">
			                <input type="text" value={this.state.emailAddress} onChange={this.emailHandleChange} id="emailAddress" name="email" placeholder="Email Address" required="required"/>

			                <input type="password" value={this.state.password} onChange={this.passwordHandleChange} id="password" name="pass" placeholder="Create Password" required="required"/>

			                
						</div>
						{/*<Link to="/profile"> */}
						<button className="btn btn-primary" id="buttonSignUp" type="submit">Login</button>
	              	</form>
	             
	        </div>
	    </div>
    );
  }
}

export default Login;
