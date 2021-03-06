import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Contacts from './components/Contacts';
import AddFriend from './components/AddFriend';
import Friend from './components/Friend';
import registerServiceWorker from './registerServiceWorker';

render((
	<BrowserRouter>
		<App>
			<switch>
				<Route exact path="/" component={Home}/>
				{/* <Route path="/Home" component={Home}/> */}
				<Route path="/Signup" component={Signup}/>
				<Route path="/Login" component={Login}/>
				<Route name="Profile/:userID" path="/Profile" component={Profile}/>
				<Route name="EditProfile" path="/EditProfile" component={EditProfile}/>
				<Route name="Contacts/:userID" path="/Contacts" component={Contacts}/>
				<Route name="AddFriend/:userID" path="/AddFriend" component={AddFriend}/>
				<Route name=":userID/:friendName" path="/Friend" component={Friend}/>
			</switch>
		</App>	
	</BrowserRouter>

	), document.getElementById('root'));
registerServiceWorker();


	// import React from 'react'
	// import { render } from 'react-dom'
	// import { BrowserRouter } from 'react-router-dom'
	// import App from './components/App';

	// render((
	//   <BrowserRouter>
	//     <App />
	//   </BrowserRouter>
	// ), document.getElementById('root'));
