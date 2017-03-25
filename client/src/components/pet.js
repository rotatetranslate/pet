import React, { Component } from 'react';
import {Entity} from 'aframe-react';

class Pet extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Entity
        material={{color: '#4CC3D9'}}
        geometry={{primitive: 'sphere', radius: 1}}
        position={[-1, .5, -5]} />
    )
  }
}

export default Pet;
