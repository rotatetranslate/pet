import React, { Component } from 'react';
import PetOverview from './PetOverview';
import { getPets } from './../helpers';
import '../App.css';

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
    let pets = this.state.pets != null ? this.state.pets.map(p => <li><PetOverview pet={p} key={p._id} /></li>) : '';
    return (
      <div className="container">
        <div>
          <h1>Select Pet</h1>
          <ul>
            {pets}
            <li>
              <div className="box">
                <h3>New Pet</h3>
                <h5>Name:</h5>
                <input
                  type="text"
                  name="petname"
                  placeholder="New pet name"/> <br/>
                <button>New pet</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

export default SelectPetForm;
