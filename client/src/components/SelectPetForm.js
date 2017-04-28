import React, { Component } from 'react';
import PetOverview from './PetOverview';
import { getPets } from './../helpers';
import update from 'immutability-helper';
import '../App.css';

class SelectPetForm extends Component {
  constructor() {
    super()
    this.state = {
      pets: null,
      newPetName: null,
      message: null
    }
    this.updateNewPetName = this.updateNewPetName.bind(this);
    this.checkNameLength = this.checkNameLength.bind(this);
    this.submitNewPetForm = this.submitNewPetForm.bind(this);
  }

  componentDidMount() {
    getPets(data => this.setState({pets: data.pets}))
  }

  render() {
    let pets = this.state.pets != null ? this.state.pets.map(p => <li><PetOverview pet={p} key={p._id} /></li>) : '';
    return (
      <div className="container">
        <div>
          {/* <span>logout</span> */}
          <h1>Select Pet</h1>
          <ul>
            {pets}
            <li>
              <form className="box" method="POST" onSubmit={this.submitNewPetForm}>
                <h3>New Pet</h3>
                <h5>Name:</h5>
                <input
                  type="text"
                  name="newPetName"
                  placeholder="New pet name"
                  onChange={this.updateNewPetName} />
                <br/>
                <p>{this.state.message}</p>
                <button>New pet</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  updateNewPetName(e) {
    this.setState({newPetName: e.target.value}, () => this.checkNameLength());
  }

  checkNameLength() {
    let {newPetName} = this.state;
    newPetName.length >= 30 ?
    this.setState({
      newPetName: newPetName.slice(0, 9),
      message: '⚠️ Name must be under 30 characters ⚠️'
    }) :
    this.setState({message: null});
  }

  submitNewPetForm(e) {
    e.preventDefault();
    document.querySelector('input').value = null;
    let token = sessionStorage.getItem('petToken');
    let {newPetName} = this.state;
    if (newPetName && newPetName.length < 30) {
      fetch('pet/new/', {
        method: 'post',
        headers: {
          'Authorization': `JWT ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newPetName})
      })
      .then(res => res.json())
      .then(pet => {
        let updatedPets = update(this.state.pets, {$push: [pet]});
        this.setState({pets: updatedPets})
      })
      .catch(err => console.log(err))
      // .then(console.log('test??'))
    } else {
      this.setState({message: '⚠️ Please enter a name ⚠️'});
    }
  }

}

export default SelectPetForm;
