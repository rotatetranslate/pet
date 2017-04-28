import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PetOverview = ({pet}) => {
  return (
    <div className="box">
      <h5>Name: {pet.name}</h5>
      <h5>Age: {pet.age}</h5>
      <h5>Weight: {pet.weight} lbs</h5>
      <h5>Birthday: </h5>
      <h5>Last seen: </h5>
      <button>
        <Link to={`/pets/${pet._id}`}>Select</Link>
      </button>
    </div>
  )
}

export default PetOverview;
