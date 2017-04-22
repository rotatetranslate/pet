import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Stat = props => {
  // console.log('PROPS', props)
  return (
    <Entity
      geometry={{primitive: 'box', depth: .75, height: .75, width: .75}}
      material={{color: '#ab310b'}}
      text={{value: props.type, wrapCount: 10, color: 'black', zOffset: .51}}
      position={props.position} />
  )
}

export default Stat;
