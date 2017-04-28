import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      passwordsMatch: false,
      user: {
        username: null,
        password: null,
        confirmPassword: null,
      }
    }
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.checkPasswordsMatch = this.checkPasswordsMatch.bind(this);
    this.login = this.login.bind(this);
  }
  render() {
    if (sessionStorage.getItem('petToken') != null) {
      return <Redirect to="/"/>
    }
    return (
      <div className="container">
        <div>
          <h1>VIRTUA PET</h1>
          <form className="box" method="POST" onSubmit={this.submitLoginForm}>
            <h3>Sign Up</h3>
            <h5>Username:</h5>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={this.updateUserInfo} />
            <br/>
            <h5>Password:</h5>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.updateUserInfo} />
            <br/>
            <h5>Confirm Password:</h5>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={this.updateUserInfo} />
            <br/>
            <button
              disabled={!this.state.user.username || !this.state.passwordsMatch}>
              Sign Up
            </button>
            <br/>
            <p>{this.state.message}</p>
            <h5>Already have an account? <Link to="/login">Log In</Link></h5>
          </form>
        </div>
      </div>
    )
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.state.user.username && this.state.passwordsMatch) {
      console.log('signing up')
      fetch('auth/signup/', {
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
  }

  login(data) {
    if (data.error) {
      this.setState({message: `⚠️ ${data.error} ⚠️`});
    } else {
      sessionStorage.setItem('petToken', data.token);
      this.setState({user: data.token});
    }
  }

  updateUserInfo(e) {
    const user = this.state.user;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({
      user: user
    });
    if (!this.state.user.username) {
      this.setState({message: '⚠️ Please enter a username ⚠️'})
    }
    if (this.state.user.confirmPassword) {
      this.checkPasswordsMatch();
    }
  }

  checkPasswordsMatch() {
    let {password, confirmPassword} = this.state.user;
    password && password === confirmPassword ?
    this.setState({
      message: null,
      passwordsMatch: true
    }) :
    this.setState({
      message: '⚠️ Passwords do not match ⚠️',
      passwordsMatch: false
    });
  }

}

export default SignupForm;
