import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Stat from './Stat';

// const PetStats = ({stats}) => {
//   return (
//     <Entity position={{x: 1, y: 0, z: -6}}>
//       <Stat position={{z: -6}}/>
//     </Entity>
//   )
// }

class PetStats extends Component {
  constructor() {
    super()
    this.formatStats = this.formatStats.bind(this);
  }

  render() {
    let formattedStats = this.formatStats(this.props);
    // console.log('formatted stats ', formattedStats);
    return (
      <Entity position={{x: 1, y: 3, z: -6}}>
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
        formattedStats.push(<Stat type={keys[i]} position={pos} key={Math.random()}/>);
      }
    }
    return formattedStats;
  }

}

export default PetStats;
