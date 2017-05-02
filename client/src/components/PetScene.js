import 'aframe';
import 'aframe-text-geometry-component';
import React, { Component } from 'react';
import { Scene } from 'aframe-react';
import Camera from './Camera';
import Text from './Text';
import Pet from './Pet';
import PetActions from './PetActions';
import PetStats from './PetStats';

const PetScene = props => {
  return (
    <Scene>
      <Camera>
        <a-cursor>
        </a-cursor>
      </Camera>
      <Pet
        pet={props.pet}
        text={`Hello ${props.user}. How are u?`}/>
      <PetActions
        feed={props.feed}
        play={props.play}/>
      <PetStats stats={props.pet.stats}/>
    </Scene>
  )
}

export default PetScene;
