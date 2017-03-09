import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Login from './components/login'
import Pen from './components/pen'
import './index.css';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/pen" component={Pen}/>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
