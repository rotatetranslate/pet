import React, { Component } from 'react';
import {Entity} from 'aframe-react';

class PetActions extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        PetActions
        <Entity geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2' position='0 -0.5 -3'/>
      </div>
    )
  }
}

export default PetActions;
