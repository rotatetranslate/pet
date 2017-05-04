import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from './../helpers'

const PetOverview = ({pet}) => {
  let formattedLastSeen = formatDate(new Date(pet.updatedAt));
  let formattedBday = formatDate(new Date(pet.birthday));
  return (
    <div className="box">
      <h5>Name: {pet.name}</h5>
      <h5>Age: {pet.age}</h5>
      <h5>Weight: {pet.weight} lbs</h5>
      <h5>Birthday: {formattedBday}</h5>
      <h5>Last seen: {formattedLastSeen}</h5>
      <button>
        <Link to={`/pets/${pet._id}`}>Select</Link>
      </button>
    </div>
  )
}

export default PetOverview;
