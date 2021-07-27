import React, { Component } from "react";
import { specialistLogin } from '../services/auth'

export default class SpecialistLogin extends Component {
  state = {
    username: '',
    password: '',
    message: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
      e.preventDefault()
      const { username, password } = this.state
      specialistLogin(username, password)
      .then(response => {
          if(response.message) {
              this.setState({
                  message: response.message,
                  username: '',
                  password: ''
              })
              console.log(response.message)
          } else {
              this.props.setUser(response)
              this.props.history.push('/specialist-dashboard')
          }
      })
  };

  render() {
    return (
      <>
        <h2>Specialist Login</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
            />
            <button>Login</button>
            {this.state.message && (
                <h4>{this.state.message}</h4>
            )}
        </form>
      </>
    );
  }
}