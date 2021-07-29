import axios from "axios";
import React, { Component } from "react";
import { updateUser } from "../services/ProfileService";

export default class ClientProfile extends Component {
  state = {
    id: this.props.user._id,
    username: this.props.user.username,
    name: this.props.user.name,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
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
    const { username, id, name, lastname, email } = this.state;
    axios
      .put("/api/profile/user", {
        username,
        id,
        name,
        lastname,
        email,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          name: response.data.name,
          lastname: response.data.lastname,
          email: response.data.email,
        });
        this.props.setUser(response.data);
        this.props.history.push("/client-dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("XXX: ", this.state.user);
    return (
      <div className="auth-container">
        <div className="form-box">
          <form onSubmit={this.handleSubmit}>
            <div className="form-setup">
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  readOnly
                />
              </label>
            </div>

            <div className="form-setup">
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-setup">
              <label htmlFor="lastname">
                Last name
                <input
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-setup">
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <button type="submit" className="auth-button">
                Edit Profile
              </button>
              {this.state.message && <h4>{this.state.message}</h4>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
