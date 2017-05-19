import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Text from './Text';

const Pet = ({text, finishedPhrase}) => {
  return (
    <Entity
      obj-model={{obj: '#ballerina-obj', mtl: '#ballerina-mtl'}}
      position={{x: -1, y: 0, z: -4}}
      scale={{x: .075, y: .075, z: .075}} >
      <Text
        position={{x: 17, y: 12, z: -5}}
        text={text}
        finishedPhrase={finishedPhrase}
        size={4.5}/>
    </Entity>
  )
}

export default Pet;
