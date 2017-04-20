import 'aframe';
import 'aframe-text-geometry-component';

import React, { Component } from 'react';
import { Scene } from 'aframe-react';
import Text from './Text';
import Pet from './Pet';
import PetActions from './PetActions';
import Camera from './Camera';

// import font from '../assets/fonts/04b30_Regular.json';

const PetScene = props => {
  return (
    <Scene>
      <Camera>
        <a-cursor>
        </a-cursor>
      </Camera>
      <Text
        text={`Hello ${props.user}`}
        position={{x: 0, y: 1, z: -5}}
        // font={font}
        // font='bubble1.json'
      />
      <Pet pet={props.pet} />
      <PetActions
        feed={props.feed}
        play={props.play}/>
    </Scene>
  )
}



export default PetScene;
