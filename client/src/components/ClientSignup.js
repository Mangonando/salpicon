import React, { Component } from "react";
import { signup } from "../services/auth";
import { Link } from "react-router-dom";

export default class ClientSignup extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then((response) => {
      if (response.message) {
        this.setState({
          message: response.message,
          username: '',
          password: '',
        });
      } else {
        this.props.setUser(response);
        this.props.history.push("/client-dashboard");
      }
    });
  };

  render() {
    return (
      <>
        <h2>Client Sign Up</h2>
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
          <button type="submit">Sign Up</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
          <Link to="/specialist-signup">Specialist Sign Up</Link>
        </form>
      </>
    );
  }
}
