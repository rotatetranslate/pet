import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'World'
    }
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
        <h1>Hello {this.state.user}</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/pen">Pen</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
