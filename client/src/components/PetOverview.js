import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PetOverview = ({pet}) => {
  return (
    <div>
      Name: {pet.name}
      <Link to={`/pets/${pet._id}`}>Select</Link>
      {/* <button onClick={() => props.selectPet(props.pet)}>Select</button> */}
    </div>

  )
}

export default PetOverview;
