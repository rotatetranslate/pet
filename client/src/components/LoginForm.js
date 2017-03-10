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
    this.updateInfo = this.updateInfo.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.submitLoginForm}>
        <h2>Log In</h2>
        Username: <input name="username" type="text" placeholder="Username" onChange={this.updateInfo} /> <br/>
        Password: <input name="password" type="password" placeholder="Password" onChange={this.updateInfo} /> <br/>
        <button>Log In</button> <br/>
        Don't have an account? Create One
      </form>
    )
  }

  submitLoginForm(e) {
    e.preventDefault();
    console.log('submitting');
    console.log(this.state.user)
    fetch('/login', {
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

  updateInfo(e) {
    const user = this.state.user;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({
      user: user
    })
  }

}

export default LoginForm;
