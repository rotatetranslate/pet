import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import LoginForm from './components/LoginForm'
import Pen from './components/Pen'
import './index.css';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/pen" component={Pen}/>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
