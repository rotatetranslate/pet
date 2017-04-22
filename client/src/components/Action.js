import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Action = props => {
  return (
    <Entity
      geometry={{primitive: 'box', depth: .5, height: 2, width: 1}}
      material={{color: '#FFC65D'}}
      position={props.position}
      events={{click: () => props.action()}} />
      // events={{click: () => console.log(props.action)}} />
  )
}

export default Action;
