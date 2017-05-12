import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Stat = ({position, type}) => {
  return (
    <Entity
      // obj-model={{obj: 'url(/models/burger.obj)', mtl: 'url(/models/burger.mtl)'}}
      geometry={{primitive: 'box', depth: .75, height: .75, width: .75}}
      material={{color: '#ab310b'}}
      text={{value: type, wrapCount: 10, color: 'black', zOffset: .51}}
      position={position} />
  )
}

export default Stat;
