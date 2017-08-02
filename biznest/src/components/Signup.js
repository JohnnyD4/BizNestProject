// 'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import LoginHOC from 'react-facebook-login-hoc';
import {Link} from 'react-router-dom';
import axios from 'axios';
 
class MyComponent extends React.Component {
    constructor(props) {
    super(props)
   // this.props.name = "John";
    // this.status = this.props.fb.status
    // this.login = this.props.fb.login
    // this.logout = this.props.fb.logout
  }
    responseFacebook(response) {
        
       // document.getElementbyId("buttonSignUp").innerHTML = response.name;
        // this.props.name = response.name; 

        axios.post('http://localhost:4000/facebook/login',  
        response)

        .then(function(result) {
            console.log(result);
            var content = response;


            // if (content.data.length === 1) {
            //     console.log(content.data[0].first_name);
            //     user.setState({userData: content.data[0]});
            //     this.props.callbackFromParent(content.data[0]);
            // } else {
            //     console.log(content.data);
            // }
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
            <Link to="/profile"><FacebookLogin
                appId="490135684667453"
                autoLoad={true}
                fields="name,picture"
                callback={this.responseFacebook}
            /></Link>
            <Link to="/profile"><button className="btn btn-primary" id="buttonSignUp">Login as {this.props.name}</button></Link>
        </div>    
    )
  }
}
 
export default MyComponent;

// import LoginHOC from 'react-facebook-login-hoc';
 
// const configureLoginProps = {
//   scope: 'public_profile, email',
//   xfbml: false,
//   cookie: false,
//   version: 2.6,
//   language: 'en_US',
//   appId: '490135684667453'
// }
 
// class App extends React.Component {
//   constructor(props) {
//     super(props)
 
//     this.status = this.props.fb.status
//     this.login = this.props.fb.login
//     this.logout = this.props.fb.logout
//   }
//   getStatus(response) {
//     if (response.authResponse) {
//        console.log('Welcome, Fetching info');
//        // fb.api('/me', function(response) {
//        //       console.log()
//        // })
//       this.responseApi.call(this, response.authResponse)
//     }
//   }
//   responseApi(res) {
//     console.log('token:', res.accessToken)
//     console.log('user:', res);
//   }
//   checkLoginState() {
//     this.status(this.getStatus.bind(this))

//   };
//   loginFacebook() {
//     this.login(this.getStatus.bind(this))

//   }
//   logoutFacebook() {
//     this.logout()
//     console.log("Logged out");
//   }
//   render() {
//     return (
//         <div>
//             <button onClick={ this.checkLoginState.bind(this) }>Get Facebook Login Status</button>
//             <button onClick={ this.loginFacebook.bind(this) }>Facebook Login</button>
//             <button onClick={ this.logoutFacebook.bind(this) }>Facebook Logout</button>
//         </div>
//     );
//   }
// }
 
// export default LoginHOC(configureLoginProps)(App);
// 
// 