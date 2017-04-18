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
    getPets(pets => this.setState({pets: pets}))
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
  // getPets(cb) {
  //   let token = sessionStorage.getItem('petToken');
  //   fetch('/auth/jwt', {
  //     method: 'post',
  //     headers: {
  //       'Authorization': `JWT ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(pets => cb(pets))
  //   .catch(err => console.log(err))
  // }
}

export default SelectPetForm;
