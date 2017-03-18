import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import LoginForm from './components/LoginForm'
import PetScene from './components/PetScene'
import './index.css';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    {/* <Route path="/login" component={LoginForm}/>
    <Route path="/petscene" component={PetScene}/> */}
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
