import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
  }
  componentWillMount() {
    fetch('/test')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <LoginForm login={this.login} />
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/pen">Pen</Link></li>
        </ul>
      </div>
    );
  }

  login(user) {
    console.log(user);
  }
  
}

export default App;
