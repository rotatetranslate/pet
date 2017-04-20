import 'aframe';
import 'aframe-text-geometry-component';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

export default Text = props => {
  return (
    <Entity
      text-geometry={{value: props.text, font: 'http://localhost:3000/bubble1.json'}}
      position={props.position} />
  )
}
