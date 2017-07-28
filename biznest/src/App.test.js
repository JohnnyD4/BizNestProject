import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var routes = require("./config/routes");

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(routes, div);
});
