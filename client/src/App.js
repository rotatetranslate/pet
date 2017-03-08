import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    fetch('/test')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
