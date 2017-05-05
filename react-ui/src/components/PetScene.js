import 'aframe';
import 'aframe-text-geometry-component';
import 'aframe-rain';
import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import Camera from './Camera';
import Text from './Text';
import Pet from './Pet';
import PetActions from './PetActions';
import PetStats from './PetStats';

const PetScene = props => {
  let rain = props.weather && props.weather.includes('Rain') ? 5000 : 0;
  return (
    <Scene rain={{count: rain}}>
      <Camera>
        <a-cursor>
        </a-cursor>
      </Camera>
      <Pet
        pet={props.pet}
        text={props.text}
        finishedPhrase={props.finishedPhrase}/>
      <PetActions
        feed={props.feed}
        play={props.play}/>
      <PetStats
        stats={props.pet.stats}/>
      <Entity
        geometry={{primitive: 'circle', radius: 20}}
        position={{y: -1, z: -5}}
        rotation={{x: -90}}
        material={{color: 'green'}}/>
    </Scene>
  )
}

export default PetScene;
