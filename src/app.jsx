// Load styles
require('./stylesheets/main.sass')

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

// Containers
import MyContainer from './containers/MyContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MyContainer}/>
  </Router>,
  document.getElementById('content'));
