import 'aframe';
import 'aframe-text-geometry-component';

import React, { Component } from 'react';
import {Scene} from 'aframe-react';
import Text from './Text';
import Pet from './Pet';
import PetActions from './PetActions';

// import font from '../assets/fonts/04b30_Regular.json';
// console.log('FONT ', font.constructor === Object);

class PetScene extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Scene>
        <Text
          text={`Hello ${this.props.user.name}`}
          position={[0, 1, -5]}
          // font={font}
          font='bubble1.json'
        />
        <Pet pet={this.props.user.pets[0]}/>
        <PetActions />
      </Scene>
    )
  }
}

export default PetScene;
