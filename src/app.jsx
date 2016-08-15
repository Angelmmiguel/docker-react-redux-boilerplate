// Load styles
require('./stylesheets/main.sass')

// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './stores/store';

// Containers
import MyContainer from './containers/MyContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MyContainer}/>
    </Router>
  </Provider>,
  document.getElementById('content'));
