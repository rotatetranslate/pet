import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Pet = () => {
  return (
    <Entity
      material={{color: '#4CC3D9'}}
      geometry={{primitive: 'sphere', radius: 1}}
      position={{x: -1, y: .5, z: -5}} />
  )
}

export default Pet;
