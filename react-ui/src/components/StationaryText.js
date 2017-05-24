import 'aframe';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const StationaryText = ({value, position, color, size}) => {
  return (
    <Entity
      text-geometry={{value, size, font: '#waku3d'}}
      position={position}
      material={{color}}/>
  )
}

export default StationaryText;
