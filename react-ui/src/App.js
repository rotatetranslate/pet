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
    this.clean = this.clean.bind(this);
    this.sleep = this.sleep.bind(this);
    this.cycle = this.cycle.bind(this);
    this.updatePet = this.updatePet.bind(this);
  }

  componentDidMount() {
    getPets(data => this.setState({
      user: data.user,
      pet: data.pets.find(pet => pet._id === this.props.match.params.id)
    }, () => setTimeout(() => {
      // this.cycle()
    }, 5000)));
  }

  render() {
    return this.state.pet ?
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
    } else {
      // 25% chance to get sick if try to feed when fullness === 4
      if (randInt(0, 100) <= 25) {
        let updatedPet = update(this.state.pet, {
          sick: {$set: true}
        });
        this.setState({pet: updatedPet}, () => this.updatePet());
      }
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
    let updatedPet = update(this.state.pet, {
      sleeping: {$set: true}
    });
    this.setState({pet: updatedPet}, () => this.updatePet());
  }

  clean() {
    let updatedPet = update(this.state.pet, {
      waste: {$set: 0}
    });
    this.setState({pet: updatedPet}, () => this.updatePet());
  }

  // every minute
  // check weight to determine stage/asset
  // 0 - 20 child, 20 - 50 teen, 50 + adult
  //  75% chance to remove 1 energy, fullness, happiness
  cycle() {
    let chances = [0, 0, 0].map(chance => randInt(0, 100) <= 75 ? 1 : 0);
    let updatedPet = update(this.state.pet, {
      stats: {happiness: {$apply: x => x - chances[0]},
              energy: {$apply: y => y - chances[1]},
              fullness: {$apply: z => z - chances[2]}}
    });
    console.log('chances', chances);
    this.setState({pet: updatedPet}, () => this.updatePet());
    setTimeout(() => {
      this.cycle();
    }, 5000)
  }

  // cycleChance() {
  //   let chances = [0, 0, 0].map(chance => randInt(0, 100) <= 75 ? 1 : 0);
  // }

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
    .catch(err => console.log(err));
  }

}

export default App;