import React, { Component } from 'react';
import PetOverview from './PetOverview';

const SelectPetForm = props => {
  const pets = props.pets.map(p => <PetOverview pet={p} key={p._id} selectPet={props.selectPet} />)
  return (
    <div>
      Select Pet
      <ul>
        {pets}
      </ul>
    </div>
  )
}

export default SelectPetForm;
