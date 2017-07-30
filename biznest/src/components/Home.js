import React, { Component } from 'react';
// import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div>

	      	<div className="entryPage">
	      		<h1>BizNest</h1>
	      		<img src="http://clipartix.com/wp-content/uploads/2016/10/Vintage-beehive-clipart-free-images.png" alt="bee"/>            
	            <Link to="/Signup"><h1>Signup</h1></Link>
	            <h1>Already have an account? <Link to="/Login">Login</Link></h1>
	      	</div>
	    </div>
    );
  }
}

export default Home;
