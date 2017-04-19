import 'aframe';
import 'aframe-text-geometry-component';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

export default Text = props => {
  return <Entity
            text-geometry={{value: props.text}}
            position={props.position} />
}
