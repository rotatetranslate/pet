import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import LoginForm from './components/LoginForm';
import PetScene from './components/PetScene';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
  }

  render() {
    return this.state.user ?
    <PetScene user={this.state.user}/> :
    (
      <div>
        <LoginForm login={this.login} />
        {/* <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/pen">Pen</Link></li>
        </ul> */}
      </div>
    )
  }

  login(loginData) {
    sessionStorage.setItem('token', loginData.token)
    this.setState({
      user: loginData.user
    });
  }

}

export default App;
