import React, { Component } from "react";
import "./SpecialistsList.css";

export default class SpecialistsList extends Component {

  render() {
    if (this.props.specialists.length === 0) return <>Sorry! no specialists yet</>;

    let filtered = this.props.specialists.filter(specialist => {
      return `${specialist.name}${specialist.lastname}`.toLowerCase().includes(this.props.query.toLowerCase())
    })
    // const filteredUsers = users.filter(user => {
    //   return this.state[user.role]
    //     && (`${user.firstName}${user.lastName}`.toLowerCase()).includes(this.state.search.toLowerCase())
    //     && (user.campus === this.state.campus || !this.state.campus);
    // });

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
                <ul>
                  <li>Test 1</li>
                  <li>Test 2</li>
                  {specialist.services.map((service) => {
                    return (
                      <li>
                        {service.type} {service.price}
                      </li>
                    );
                  })}
                </ul>
                <hr className="divider" />
              </div>
            );
          })}
        </div>
     );
  }
}
