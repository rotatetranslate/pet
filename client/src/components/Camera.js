import 'aframe';
import 'aframe-extras';
import { Entity } from 'aframe-react';
import React from 'react';

const Camera = props => (
  // <Entity>
  <Entity primitive="a-camera">
    {/* <Entity camera="" look-controls="" wasd-controls="" {...props}/> */}
    {/* <Entity universal-controls={{movementControls: 'mouse'}}/> */}
  </Entity>
);

export default Camera;
