import React, { Component } from "react";
import { signup } from "../services/auth";
import { Link } from "react-router-dom";
import "./ClientSignup.css";

export default class ClientSignup extends Component {
  state = {
    email: "",
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
    const { email, username, password } = this.state;
    signup(email, username, password).then((response) => {
      if (response.message) {
        this.setState({
          email: "",
          username: "",
          password: "",
          message: response.message,
        });
      } else {
        this.props.setUser(response);
        this.props.history.push("/client-dashboard");
      }
    });
  };

  render() {
    return (
      <div className="auth-container">
        <div>
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
                <button type="submit" className="auth-button auth-button-cs">
                  Sign Up
                </button>
                {this.state.message && <h3>{this.state.message}</h3>}
              </div>
              <p>
                Are you a specialist? Then sign up&nbsp;
                <Link to="/specialist-signup">here</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="background-image-cs"></div>
      </div>
    );
  }
}
