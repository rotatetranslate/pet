import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './../App';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SelectPetForm from './SelectPetForm';

const loggedIn = () => sessionStorage.getItem('petToken') != null;

const MyRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => loggedIn() ? <Redirect to="/pets" /> : <Redirect to="/login" /> } />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route exact path="/pets" component={SelectPetForm} />
      {/* <Route path="/pets/:id" component={App} /> */}
      <Route path="/pets/:id" render={props => loggedIn() ? <App {...props} /> : <Redirect to="/login" /> } />
    </Switch>
  </Router>
)

export default MyRouter;
