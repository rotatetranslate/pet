import React, { Component } from 'react';
import {Scene} from 'aframe-react';
import Text from './Text'

class PetScene extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Scene>
        <Text user={this.props.user}/>
      </Scene>
    )
  }
}

export default PetScene;
