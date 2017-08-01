// 'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
 
  render() {
    return (
        <div className="signupPage">
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
            />
        </div>    
    )
  }
}
 
export default MyComponent;