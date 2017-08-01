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
import registerServiceWorker from './registerServiceWorker';

render((
	<BrowserRouter>
		<App>
			<switch>
				<Route exact path="/" component={Home}/>
				{/* <Route path="/Home" component={Home}/> */}
				<Route path="/Signup" component={Signup}/>
				<Route path="/Login" component={Login}/>
				<Route path="/Profile" component={Profile}/>
				<Route path="/EditProfile" component={EditProfile}/>
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
