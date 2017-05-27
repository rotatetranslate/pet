import 'aframe';
import extras from 'aframe-extras';
import { Entity } from 'aframe-react';
import React from 'react';
import 'aframe-animation-component';

extras.controls.registerAll();

const Camera = props => {
  return (
    <Entity
      primitive='a-camera'
      universal-controls>
      <Entity
        primitive='a-cursor'
        animation={{property: 'scale', startEvents: 'click', from: '1 1 1', to: '2 2 2', dur: 200}}
        />
    </Entity>
  )
}

export default Camera;
