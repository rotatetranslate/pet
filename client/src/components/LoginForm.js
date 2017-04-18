import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: null,
        password: null,
      }
    }
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.login = this.login.bind(this);
  }
  render() {
    if (sessionStorage.getItem('petToken') != null) {
      return <Redirect to="/"/>
    }
    return (
      <div>
        VIRTUA PET
        <form method="POST" onSubmit={this.submitLoginForm}>
          <h2>Log In</h2>
          Username: <input name="username" type="text" placeholder="Username" onChange={this.updateUserInfo} /> <br/>
          Password: <input name="password" type="password" placeholder="Password" onChange={this.updateUserInfo} /> <br/>
          <button>Log In</button> <br/>
          Don't have an account? Create One
        </form>
      </div>
    )
  }

  submitLoginForm(e) {
    e.preventDefault();
    fetch('auth/login/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.user)
    })
    .then(res => res.json())
    .then(data => this.login(data))
    .catch(err => console.log(err))
  }

  login(loginData) {
    console.log(loginData)
    sessionStorage.setItem('petToken', loginData.token);
    this.setState({
      user: loginData.user
    });
  }

  updateUserInfo(e) {
    const user = this.state.user;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({
      user: user
    })
  }

}

export default LoginForm;
