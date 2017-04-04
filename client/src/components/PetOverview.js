import React, { Component } from 'react';

const PetOverview = props => {
  return (
    <div>
      {props.pet.name}
      <button onClick={() => props.selectPet(props.pet)}>Select</button>
    </div>

  )
}

export default PetOverview;
