import React, { Component } from "react";
import { signup } from "../services/auth";

export default class ClientSignup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {};

  render() {
    return (
      <>
        <h2>Sign Up</h2>
      </>
    );
  }
}
