import React, { Component } from "react";
import { specialistSignup } from "../services/auth";
import "./SpecialistSignup.css";

export default class SpecialistSignup extends Component {
  state = {
    email: "",
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
    const { email, username, name, lastname, password } = this.state;
    specialistSignup(email, username, name, lastname, password).then(
      (response) => {
        if (response.message) {
          this.setState({
            message: response.message,
            username: "",
            password: "",
          });
        } else {
          this.props.setUser(response);
          this.props.history.push("/specialist-dashboard");
        }
      }
    );
  };

  render() {
    return (
      <div className="auth-container">
        <div className="background-image-ss"></div>
        <div>
          <h2>Specialist</h2>
          <div className="form-box">
            <form onSubmit={this.handleSubmit}>
              <div className="form-setup">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-setup">
                <label htmlFor="username">Username</label>
                <div>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-setup">
                <label htmlFor="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-setup">
                <label htmlFor="lastname">Last Name</label>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-setup">
                <label htmlFor="password">Password</label>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="auth-button auth-button-ss">
                  Signup
                </button>
                {this.state.message && <h3>{this.state.message}</h3>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
