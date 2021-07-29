import React, { Component } from "react";
import ClientSearchFilter from "./ClientSearchFilter";
import SpecialistsList from "./SpecialistsList";
import "./ClientDashboard.css";
import axios from "axios";

export default class ClientDashboard extends Component {
  state = {
    specialists: [],
    query: "",
  };

  getSpecialists = () => {
    axios.get("/api/clientFilter").then((response) => {
      this.setState({
        specialists: response.data,
      });
    });
  };

  componentDidMount() {
    this.getSpecialists();
  }

  setQuery = (query) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div className="container-filter">
        <ClientSearchFilter query={this.state.query} setQuery={this.setQuery} />
        <SpecialistsList query={this.state.query} specialists={this.state.specialists} />
      </div>
    );
  }
}
