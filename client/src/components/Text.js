import 'aframe';
import 'aframe-text-geometry-component';
import {Entity} from 'aframe-react';
import React, { Component } from 'react';

export default props => {
  return (
    <Entity
      text-geometry={{value: `Hello ${props.user.name}`}} position={[0, 1, -5]} />
  )
}


// font: '../assets/fonts/knxt.bdf'}} position={[0, 1, -5]}/>
