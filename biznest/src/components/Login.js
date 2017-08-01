import React, { Component } from 'react';
// import logo from '../logo.svg';
import {Link} from 'react-router-dom';

import axios from 'axios';

import Profile from './Profile';

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
   		
    	event.preventDefault();

    	// var data = {
    	// 	emailAddress : this.state.emailAddress,
    	// 	password : this.state.password
    	// }
    	// console.log(data);

    	axios.post('http://localhost:4000/api/login',  
    	{
    		emailAddress: this.state.emailAddress,
    		password: this.state.password
    	})

    	.then(function(result) {
    		console.log(result);
    		var content = result;
    		// console.log(content.data);

    		if (content.data.length === 1) {
    			console.log(content.data[0].first_name);
    			return <Profile />
    		} else {
    			console.log(content.data);
    		}
    	})

    	.catch(function(err) {
    		if (err) throw err;
    	})

    	// fetch('/api/login')
	      
	    //   .then((response) => {
	    //     console.log(response);
	    //   })
	    //   .catch((error) => {
	    //     console.error(error);
	    //   });


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
			                <input type="text" 
			                		value={this.state.emailAddress} 
			                		onChange={this.emailHandleChange} 
			                		id="emailAddress" 
			                		name="email" 
			                		placeholder="Email Address" 
			                		required="required"/>

			                <input type="password" 
			                		value={this.state.password} 
			                		onChange={this.passwordHandleChange} 
			                		id="password" 
			                		name="pass" 
			                		placeholder="Create Password" 
			                		required="required"/>

			                
						</div>
						{/*<Link to="/profile"> */}
						<button className="btn btn-primary" id="buttonSignUp" type="submit"><Link to="/profile">Login</Link></button>
	              	</form>
	             
	        </div>
	    </div>
    );
  }
}

export default Login;
