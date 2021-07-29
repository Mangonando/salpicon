import React, { Component } from "react";
import { login } from "../services/auth";
import { Link } from "react-router-dom";
import "./ClientLogin.css";

export default class ClientLogin extends Component {
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
    login(username, password).then((response) => {
      if (response.message) {
        this.setState({
          message: response.message,
          username: "",
          password: "",
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
                <label htmlFor="username">Username: </label>
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
                <label htmlFor="password">Password: </label>
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
                <button type="submit" className="auth-button auth-button-cl">Login</button>
                {this.state.message && <h4>{this.state.message}</h4>}
              </div>
              <p>
                Are you a specialist? Then login&nbsp;
                <Link to="/specialist-login">here</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="background-image-cl"></div>
      </div>
    );
  }
}
