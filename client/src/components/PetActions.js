import React, { Component } from 'react';
import {Entity} from 'aframe-react';
import Action from './Action';

class PetActions extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Entity>
        <Action position={[-1, 5, -5]} action='feed' feed={this.props.feed}/>
        <Action position={[2, 5, -5]} action='play' />
        <Action position={[5, 5, -5]} action='clean' />
      </Entity>
    )
  }
}

export default PetActions;
