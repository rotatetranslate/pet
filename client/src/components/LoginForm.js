import React, { Component } from 'react';

// const Login = () => {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }
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
  }
  render() {
    return (
      <form onSubmit={this.submitLoginForm}>
        <h2>Log In</h2>
        Username: <input name="username" type="text" placeholder="Username" onChange={this.updateUserInfo} /> <br/>
        Password: <input name="password" type="password" placeholder="Password" onChange={this.updateUserInfo} /> <br/>
        <button>Log In</button> <br/>
        Don't have an account? Create One
      </form>
    )
  }

  submitLoginForm(e) {
    e.preventDefault();
    console.log('submitting');
    fetch('auth/login/', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
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
