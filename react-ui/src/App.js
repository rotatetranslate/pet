import React, { Component } from 'react';
import { Link } from 'react-router';
import update from 'immutability-helper';
import { randFloat, randInt, getPets, getWeather, extract } from './helpers';

import PetScene from './components/PetScene';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      pet: null,
      text: ['Hello World', 'test?', 'im hungry', 'etc.'],
      weather: null
    }
    this.feed = this.feed.bind(this);
    this.play = this.play.bind(this);
    this.clean = this.clean.bind(this);
    this.sleep = this.sleep.bind(this);
    this.cycle = this.cycle.bind(this);
    this.updatePet = this.updatePet.bind(this);
    this.finishedPhrase = this.finishedPhrase.bind(this);
  }

  componentDidMount() {
    getWeather().then(w => {
      let weather = extract(w, 'icon', 'summary', 'cloudCover', 'precipIntensity');
      this.setState({weather});
    });
    getPets().then(({user, pets}) => {
      this.setState({
        user,
        pet: pets.find(pet => pet._id === this.props.match.params.id)
      }, () => setTimeout(() => {this.cycle()}, 5000));
    });
  }

  render() {
    return this.state.pet ?
      <PetScene
        user={this.state.user}
        pet={this.state.pet}
        feed={this.feed}
        play={this.play}
        text={this.state.text}
        finishedPhrase={this.finishedPhrase}
        weather={this.state.weather} /> :
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
  // increment age
  // check weight to determine stage/asset
  // 0 - 20 child, 20 - 50 teen, 50 + adult
  // 66% chance to remove 1 energy, fullness, happiness
  cycle() {
    const lowerStat = x => {
      if (x >= 1) {
        return randInt(0, 100) <= 66 ? x - 1 : x;
      } else {
        return x;
      }
    }

    let updatedPet = update(this.state.pet, {
      age: {$apply: x => x + 1},
      stats: {happiness: {$apply: lowerStat},
              energy: {$apply: lowerStat},
              fullness: {$apply: lowerStat}}
    });

    this.setState({pet: updatedPet}, () => {
      this.updatePet().then(setTimeout(this.cycle, 5000))
    });
  }

  finishedPhrase() {
    let updatedText = update(this.state.text, {$splice: [[0, 1]]});
    this.setState({text: updatedText});
  }

  async updatePet() {
    try {
      let res = await fetch('/pet/update/', {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({pet: this.state.pet})
      });
      let pet = await res.json();
      return pet;
    } catch(err) {
      console.log(err);
    }
  }

}

export default App;
