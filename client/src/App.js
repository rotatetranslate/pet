import React, { Component } from 'react';
import { Link } from 'react-router';
import update from 'immutability-helper';
import { randFloat, randInt, getPets } from './helpers';

import PetScene from './components/PetScene';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      pet: null
    }
    this.feed = this.feed.bind(this);
    this.play = this.play.bind(this);
    this.updatePet = this.updatePet.bind(this);
  }

  componentDidMount() {
    getPets(data => this.setState({
      user: data.user,
      pet: data.pets.find(pet => pet._id === this.props.match.params.id)
    }));
  }

  render() {
    return this.state.pet != null ?
      <PetScene
        user={this.state.user}
        pet={this.state.pet}
        feed={this.feed}
        play={this.play}/> :
        null
  }

  feed() {
    if (this.state.pet.stats.fullness < 4) {
      console.log(`feeding ${this.state.pet.name}`);
      let updatedPet = update(this.state.pet, {
        stats: {fullness: {$apply: x => x + 1}},
        weight: {$apply: y => +(y + randFloat(.2, .6, 2)).toFixed(2)}
        // gains between .2 and .6 lb every time fed
        // calculate 'leveling up/stages' based on weight
      });
      this.setState({pet: updatedPet}, () => this.updatePet());
    }
  }

  play() {
    if (this.state.pet.stats.happiness < 4 && this.state.pet.stats.energy >= 0.5) {
      console.log(`playing with ${this.state.pet.name}`);
      let updatedPet = update(this.state.pet, {
        stats: {happiness: {$apply: x => x + 1},
                energy: {$apply: y => y - 0.5}}
      });
      this.setState({pet: updatedPet}, () => this.updatePet());
    }
  }

  sleep() {

  }

  clean() {

  }

  cycle() {
    // every minute
    // check weight to determine stage/asset
    // 0 - 20 child, 20 - 50 teen, 50 + adult
    //  75% chance to remove 1 energy, fullness, happiness
    // if feed while fullness === 4 33% chance to get sick
  }

  updatePet() {
    fetch('/pet/update/', {
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
