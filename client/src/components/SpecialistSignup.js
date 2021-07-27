import React, { Component } from "react";
import { specialistSignup } from "../services/auth";

export default class SpecialistSignup extends Component {
  state = {
    username: "",
    password: "",
    message: "",
    name: "",
    lastname: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, name, lastname, password } = this.state;
    specialistSignup(username, name, lastname, password).then((response) => {
      if (response.message) {
        this.setState({
          message: response.message,
          username: '',
          password: '',
        });
      } else {
        this.props.setUser(response);
        this.props.history.push("/specialist-dashboard");
      }
    });
  };

  render() {
    return (
      <>
        <h2>Specialist Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* Adding information needed for the sign up */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
      </>
    );
  }
}
