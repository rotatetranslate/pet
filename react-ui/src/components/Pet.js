import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Text from './Text';

// import petModel from './../assets/models/ballerina.obj';
// import petMaterial from './../assets/models/ballerina.mtl';

const Pet = ({text, finishedPhrase}) => {
  return (
    <Entity
      // obj-model={{obj: 'url(/ballerina.obj)', mtl: 'url(/ballerina.mtl)'}}
      obj-model={{obj: 'url(/models/ballerina.obj)', mtl: 'url(/models/ballerina.mtl)'}}
      position={{x: -1, y: 0, z: -3}}
      scale={{x: .075, y: .075, z: .075}}
      rotation={{y: -90}}>
      <Text
        position={{x: -15, y: 12, z: -15}}
        text={text}
        finishedPhrase={finishedPhrase} />
    </Entity>
  )
}

export default Pet;
