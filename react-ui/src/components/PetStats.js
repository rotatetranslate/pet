import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Stat from './Stat';

class PetStats extends Component {
  constructor() {
    super()
    this.formatStats = this.formatStats.bind(this);
  }

  render() {
    let formattedStats = this.formatStats(this.props);
    return (
      <Entity position={{x: 1, y: 3, z: -5}}>
        {formattedStats}
      </Entity>
    )
  }

  formatStats({stats}) {
    let keys = Object.keys(stats);
    let formattedStats = [];
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < stats[keys[i]]; j++) {
        let pos = {x: 0, y: 0, z: 0}
        pos.x += i;
        pos.y += j;
        formattedStats.push(<Stat type={keys[i]} position={pos} key={`${i}${j}`}/>);
      }
    }
    return formattedStats;
  }

}

export default PetStats;
