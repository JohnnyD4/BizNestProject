// 'use strict';
 
import React from 'react';
import FacebookLogin from 'react-facebook-login';
 
// class MyComponent extends React.Component {
//     responseFacebook(response) {
//     console.log(response)
//     }

//     logout(response) {
//    // Person is now logged out
//     };
 
//   render() {
//     return (
        // <div className="signupPage">
            // <FacebookLogin
                // appId="490135684667453"
                // autoLoad={true}
                // fields="name,email,picture"
        //         callback={this.responseFacebook}
        //     />
        //     <button onClick={this.logout}>Logout</button>
        // </div>    
  //   )
  // }
// }
 
// export default MyComponent;
// 
import LoginHOC from 'react-facebook-login-hoc'
 
const configureLoginProps = {
  scope: 'public_profile, email',
  xfbml: false,
  cookie: false,
  version: 2.6,
  language: 'en_US',
  appId: '490135684667453'
}
 
class App extends React.Component {
  constructor(props) {
    super(props)
 
    this.status = this.props.fb.status
    this.login = this.props.fb.login
    this.logout = this.props.fb.logout
  }
  getStatus(response) {
    if (response.authResponse) {
      this.responseApi.call(this, response.authResponse)
    }
  }
  responseApi(res) {
    console.log('token:', res.accessToken)
    console.log('user:', res);
  }
  checkLoginState() {
    this.status(this.getStatus.bind(this))

  };
  loginFacebook() {
    this.login(this.getStatus.bind(this))
    
  }
  logoutFacebook() {
    this.logout()
    console.log("Logged out");
  }
  render() {
    return (
        <div>
            <button onClick={ this.checkLoginState.bind(this) }>Get Facebook Login Status</button>
            <button onClick={ this.loginFacebook.bind(this) }>Facebook Login</button>
            <button onClick={ this.logoutFacebook.bind(this) }>Facebook Logout</button>
        </div>
    );
  }
}
 
export default LoginHOC(configureLoginProps)(App);