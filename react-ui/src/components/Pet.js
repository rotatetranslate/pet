import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import ScrollingText from './ScrollingText';
import 'aframe-animation-component';
import { eggWobble } from './../animations';

const Pet = ({pet, text, finishedPhrase}) => {
  return (
    <Entity
      obj-model={{obj: `#stage${pet.stage}-obj`, mtl: `#stage${pet.stage}-mtl`}}
      position={{x: -1, y: 0, z: -4}}
      scale={{x: .075, y: .075, z: .075}}
      animation={eggWobble}
      >
      <ScrollingText
        position={{x: 17, y: 12, z: -5}}
        text={text}
        color={'black'}
        finishedPhrase={finishedPhrase}
        size={4.5}/>
    </Entity>
  )
}

export default Pet;
