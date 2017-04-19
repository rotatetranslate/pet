import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PetOverview = ({pet}) => {
  return (
    <div>
      Name: {pet.name}
      <Link to={`/pets/${pet._id}`}>Select</Link>
    </div>
  )
}

export default PetOverview;
