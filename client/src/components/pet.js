import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import Text from './Text';

// import petModel from './../assets/models/ballerina.obj';
// import petMaterial from './../assets/models/ballerina.mtl';

const Pet = ({text}) => {
  return (
    // <Entity
    //   material={{color: '#4CC3D9'}}
    //   geometry={{primitive: 'sphere', radius: 1}}
    //   position={{x: -1, y: .5, z: -5}} >
    //   <Text
    //     position={{x: 1, y: .5}}
    //     text={text} />
    // </Entity>
    <Entity
      obj-model={{obj: 'http://localhost:3000/ballerina.obj', mtl: 'http://localhost:3000/ballerina.mtl'}}
      position={{x: -1, y: 0, z: -3}}
      scale={{x: .075, y: .075, z: .075}}
      rotation={{y: -90}}>
      <Text
        position={{x: -15, y: 12, z: -15}}
        text={text} />
    </Entity>
  )
}

export default Pet;
