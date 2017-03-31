import React, { Component } from 'react';
import { Link } from 'react-router';
// import './App.css';
import LoginForm from './components/LoginForm';
import PetScene from './components/PetScene';
import update from 'immutability-helper';
import { randFloat, randInt } from './helpers';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      pet: null
    }
    this.login = this.login.bind(this);
    this.feed = this.feed.bind(this);
  }

  render() {
    return this.state.user ?
    <PetScene
      user={this.state.user}
      pet={this.state.pet}
      feed={this.feed}/> :

      <div>
        <LoginForm login={this.login} />
        {/* <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/pen">Pen</Link></li>
        </ul> */}
      </div>

  }

  login(loginData) {
    sessionStorage.setItem('token', loginData.token);
    this.setState({
      user: loginData.user,
      pet: loginData.user.pets[0]
    });
  }

  feed() {
    if (this.state.pet.fullness < 4) {
      console.log(`feeding ${this.state.pet.name}`);
      let updatedPet = update(this.state.pet, {
        fullness: {$apply: (x) => x + 1},
        weight: {$apply: (y) => +(y + randFloat(.2, .6, 2)).toFixed(2)}
        // gains between .2 and .6 lb every time fed
        // calculate 'leveling up/stages' based on weight
      });
      this.setState({pet: updatedPet});
      fetch('pet/feed/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({pet: this.state.pet})
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
    }
  }




}

export default App;
