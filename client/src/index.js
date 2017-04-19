import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import LoginForm from './components/LoginForm'
import PetScene from './components/PetScene'
import './index.css';

import MyRouter from './components/Router';

ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);
