import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Text from './Text';

const Pet = ({text}) => {
  return (
    <Entity
      material={{color: '#4CC3D9'}}
      geometry={{primitive: 'sphere', radius: 1}}
      position={{x: -1, y: .5, z: -5}} >
      <Text
        position={{x: 1, y: .5}}
        text={text} />
    </Entity>
  )
}

export default Pet;
