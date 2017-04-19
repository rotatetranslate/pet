import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Action from './Action';

const PetActions = props => {
  return (
    <Entity>
      <Action position={[-1, 5, -5]} action={props.feed}/>
      <Action position={[2, 5, -5]} action={props.play}/>
    </Entity>
  )
}

export default PetActions;
