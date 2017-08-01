import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  myCallBack = (dataFromlogin) => {

  }

  render() {
    return (
    	<div>
    	{this.props.children}
            <Login callBackFromParent={this.myCallBack}/>

    	</div>

    );
  }
}

export default App;
