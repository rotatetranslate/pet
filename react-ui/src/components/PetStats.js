import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Stat from './Stat';
import StationaryText from './StationaryText';

class PetStats extends Component {
  constructor() {
    super()
    this.formatStats = this.formatStats.bind(this);
  }

  render() {
    let formattedStats = this.formatStats(this.props);
    return (
      <Entity
        position={{x: 1, y: 3, z: -5}}>
        {formattedStats}
      </Entity>
    )
  }

  formatStats({stats}) {
    const keys = Object.keys(stats);
    const formattedStats = [];
    for (let i = 0; i < keys.length; i++) {
      formattedStats.push(
        <StationaryText
          value={keys[i]}
          position={{x: i - .4}}
          color={'#D1AEA7'}
          size={.16}
          key={keys[i]} />
      );
      for (let j = 0; j < stats[keys[i]]; j++) {
        formattedStats.push(
          <Stat
            type={keys[i]}
            position={{x: i, y: .5 + j}}
            key={`${i}${j}`}/>
          );
      }
    }
    return formattedStats;
  }

}

export default PetStats;
