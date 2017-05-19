import 'aframe';
import 'aframe-extras';
import { Entity } from 'aframe-react';
import React from 'react';

const Camera = props => (
  <Entity
    primitive="a-camera"
    look-controls=""
    wasd-controls="">
  </Entity>
);

// const Camera = props => (
//   <Entity>
//     <Entity camera="" look-controls="" wasd-controls="" {...props}/>
//     <Entity universal-controls={{movementControls: 'mouse'}}/>
//   </Entity>
// );

export default Camera;
