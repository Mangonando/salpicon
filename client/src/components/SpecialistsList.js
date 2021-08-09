import React, { Component } from "react";
import "./SpecialistsList.css";

export default class SpecialistsList extends Component {
  render() {
    if (this.props.specialists.length === 0)
      return <>Sorry! no specialists yet</>;

    let filtered = this.props.specialists.filter((specialist) => {
      return `${specialist.serviceType}`
        .toLowerCase()
        .includes(this.props.query.toLowerCase());
    });

    return (
      <div>
        {filtered.map((specialist) => {
          return (
            <div>
              <h2>
                {specialist.name} {specialist.lastname}
              </h2>
              <p>{specialist.bio}</p>
              <p>
                <b>Phone: </b>
                {specialist.phone}
              </p>
              <p>
                <b>Email: </b>
                {specialist.email}
              </p>
              <h4>Services</h4>
              <ul className="nobullets">
                <li>{specialist.serviceType}</li>
                <li>{specialist.servicePrice} EUR</li>
              </ul>
              <hr className="divider" />
            </div>
          );
        })}
      </div>
    );
  }
}
