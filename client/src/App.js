import React, { Component } from 'react';
import { Link } from 'react-router';
// import './App.css';
import update from 'immutability-helper';
import { randFloat, randInt } from './helpers';

import LoginForm from './components/LoginForm';
import PetScene from './components/PetScene';
import SelectPetForm from './components/SelectPetForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      pet: null
    }
    this.login = this.login.bind(this);
    this.feed = this.feed.bind(this);
    this.selectPet = this.selectPet.bind(this);
    this.updatePet = this.updatePet.bind(this);
  }

  // render() {
  //   return this.state.user ?
  //   <PetScene
  //     user={this.state.user}
  //     pet={this.state.pet}
  //     feed={this.feed}/> :
  //
  //     <div>
  //       <LoginForm login={this.login}/>
  //       {/* <ul>
  //         <li><Link to="/login">Login</Link></li>
  //         <li><Link to="/pen">Pen</Link></li>
  //       </ul> */}
  //     </div>
  //
  // }

  render() {
    if (this.state.user && this.state.pet) {
      var html = <PetScene user={this.state.user} pet={this.state.pet} />
    } else if (this.state.user) {
      var html = <SelectPetForm pets={this.state.user.pets} selectPet={this.selectPet}/>
    } else {
      var html = <LoginForm login={this.login} />
    }
    return html;
  }

  login(loginData) {
    sessionStorage.setItem('token', loginData.token);
    this.setState({
      user: loginData.user
    });
  }

  selectPet(pet) {
    console.log(pet);
    this.setState({pet: pet})
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
      this.setState({pet: updatedPet}, this.updatePet());
      // should upatePet be a setState callback or use ComponentDidUpdate ??
    }
  }

  updatePet() {
    fetch('pet/update/', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pet: this.state.pet})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

}

export default App;
