import React, { Component } from 'react';
import PetOverview from './PetOverview';
import { getPets } from './../helpers';

class SelectPetForm extends Component {
  constructor() {
    super()
    this.state = {
      pets: null
    }
  }
  componentDidMount() {
    getPets(data => this.setState({pets: data.pets}))
  }
  render() {
    let pets = this.state.pets != null ? this.state.pets.map(p => <PetOverview pet={p} key={p._id} />) : '';
    return (
      <div>
        Select Pet
        <ul>
          {pets}
        </ul>
      </div>
    )
  }
  
}

export default SelectPetForm;
