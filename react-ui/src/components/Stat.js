import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Stat = ({position, type}) => {
  return (
    <Entity
      obj-model={{obj: `url(/models/${type}.obj)`, mtl: `url(/models/${type}.mtl)`}}
      scale={{x: .075, y: .075, z: .075}}
      position={position} />
  )
}

export default Stat;
