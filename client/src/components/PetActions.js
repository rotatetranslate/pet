import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Action from './Action';

const PetActions = props => {
  return (
    <Entity position={{x: -8, y: 5, z: -6}}>
      <Action position={{x: -1}} action={props.feed}/>
      <Action position={{x: 2}} action={props.play}/>
    </Entity>
  )
}

export default PetActions;
