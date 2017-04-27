import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
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
      <div className="container">
        <div>
          <h1>VIRTUA PET</h1>
          <form className="box" method="POST" onSubmit={this.submitLoginForm}>
            <h3>Log In</h3>
            <h5>Username:</h5>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={this.updateUserInfo} /> <br/>
            <h5>Password:</h5>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.updateUserInfo} /> <br/>
            <button
              disabled={!this.state.user.username || !this.state.user.password}>
              Log In</button> <br/>
              <p>{this.state.message}</p>
              <h5>Don't have an account? <Link to="/signup">Create One</Link></h5>
          </form>
        </div>
      </div>
    )
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.state.user.username && this.state.user.password) {
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
    } else {
      this.setState({message: '⚠️ Please enter your credentials ⚠️'});
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
    })
  }

}

export default LoginForm;
