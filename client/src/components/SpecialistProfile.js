import React, { Component } from "react";
import axios from "axios";

export default class SpecialistProfile extends Component {
  state = {
    id: this.props.user._id,
    username: this.props.user.username,
    name: this.props.user.name,
    lastname: this.props.user.lastname,
    bio: this.props.user.bio,
    phone: this.props.user.phone,
    email: this.props.user.email,
    serviceType: this.props.user.serviceType,
    servicePrice: this.props.user.servicePrice,
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
    const {
      username,
      id,
      name,
      lastname,
      email,
      phone,
      bio,
      serviceType,
      servicePrice,
    } = this.state;
    axios
      .put("/api/profile/specialist", {
        username,
        id,
        name,
        lastname,
        email,
        phone,
        bio,
        serviceType,
        servicePrice,
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          name: response.data.name,
          lastname: response.data.lastname,
          email: response.data.email,
          phone: response.data.phone,
          bio: response.data.bio,
          serviceType: response.data.serviceType,
          servicePrice: response.data.servicePrice,
        });
        this.props.setUser(response.data);
        this.props.history.push("/specialist-dashboard");
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
                  onChange={this.handleChange}
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
              <label htmlFor="bio">
                Bio
                <input
                  type="text-area"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-setup">
              <label htmlFor="phone">
                Phone
                <input
                  type="text"
                  name="phone"
                  value={this.state.phone}
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

            <div className="form-setup">
              <label htmlFor="serviceType">
                Service Type
                <input
                  type="select"
                  name="serviceType"
                  value={this.state.serviceType}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-setup">
              <label htmlFor="servicePrice">
                Service price
                <input
                  type="text"
                  name="servicePrice"
                  value={this.state.servicePrice}
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
