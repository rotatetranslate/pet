import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Action from './Action';

const PetActions = props => {
  return (
    <Entity>
      <Action position={{x: -1, y: 5, z: -5}} action={props.feed}/>
      <Action position={{x: 2, y: 5, z: -5}} action={props.play}/>
    </Entity>
  )
}

export default PetActions;
