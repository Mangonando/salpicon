import React, { Component } from "react";

export default class ClientSearchFilter extends Component {
  handleChange = (e) => {
    this.props.setQuery(e.target.value);
  };
  render() {
    return (
      <div className="form-setup">
        <label htmlFor="search">
          Search for the service between{" "}
          <span className="highlight-pink">manicure</span> or{" "}
          <span className="highlight-green">pedicure</span>
        </label>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search"
            id="search"
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
