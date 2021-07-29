import React, { Component } from "react";
import { specialistLogin } from "../services/auth";
import "./SpecialistLogin.css";

export default class SpecialistLogin extends Component {
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
    specialistLogin(username, password).then((response) => {
      if (response.message) {
        this.setState({
          message: response.message,
          username: "",
          password: "",
        });
        console.log(response.message);
      } else {
        this.props.setUser(response);
        this.props.history.push("/specialist-dashboard");
      }
    });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="background-image-sl"></div>
        <div>
          <div className="form-box">
            <h2>Specialist</h2>
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
                <button type="submit" className="auth-button auth-button-sl">Login</button>
                {this.state.message && <h4>{this.state.message}</h4>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
