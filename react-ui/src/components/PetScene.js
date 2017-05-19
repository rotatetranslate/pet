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
  // let rain = props.weather && props.weather.includes('Rain') ? 5000 : 0;
  return (
    // <Scene rain={{count: rain}}>
    <Scene rain={{count: 0}}>

      <a-assets>
        <a-asset-item id="waku" src="/fonts/wakuwaku.json"></a-asset-item>
        <a-asset-item id="ballerina-obj" src="/models/ballerina.obj"></a-asset-item>
        <a-asset-item id="ballerina-mtl" src="/models/ballerina.mtl"></a-asset-item>
        <a-asset-item id="energy-obj" src="/models/energy.obj"></a-asset-item>
        <a-asset-item id="energy-mtl" src="/models/energy.mtl"></a-asset-item>
        <a-asset-item id="fullness-obj" src="/models/fullness.obj"></a-asset-item>
        <a-asset-item id="fullness-mtl" src="/models/fullness.mtl"></a-asset-item>
        <a-asset-item id="happiness-obj" src="/models/happiness.obj"></a-asset-item>
        <a-asset-item id="happiness-mtl" src="/models/happiness.mtl"></a-asset-item>
        <audio id="talk-click" src="/sounds/talk_1.mp3"></audio>
      </a-assets>

      <Camera>
        <a-cursor>
        </a-cursor>
      </Camera>

      <Pet
        sound={'#talk-click'}
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
        position={{y: 0, z: -5}}
        rotation={{x: -90}}
        material={{color: 'green'}}/>
    </Scene>
  )
}

export default PetScene;
