import React, { Component } from "react"
import { fetch, update } from "../services/ProfileService";

export default class Profile extends Component {
  state = {
    user: this.props.user,
    message: ''
  }

  handleChange(event) {
    this.setState()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.user.role === "Client") {
      
    } else {

    }
    
  }

  render() {
    console.log("XXX: ", this.state.user)
    return (
      <div className="auth-container">
        <div className="form-box">
          <form>
            <div className="form-setup">
              <label>Username
                <input type="text" value={this.state.user.username} readOnly />
              </label>
            </div>
            
            <div className="form-setup">
              <label>
                Name
                <input type="text" value={this.state.user.name} />
              </label>
            </div>
            
            <div className="form-setup">
              <label>
                Last name
                <input type="text" value={this.state.user.lastname} />
              </label>
            </div>
          
            { this.state.user.role === 'Specialist' &&
              <div className="form-setup">
                <label>
                  Bio
                  <input type="text" value={this.state.user.bio}  /> 
                </label>
              </div>
            } 
            
            <div className="form-setup">
              <label>
                Phone
                <input type="text" value={this.state.user.phone} />
              </label>
            </div>
            
            <div className="form-setup">
              <label>
                Email
                <input type="text" value={this.state.user.email} />
              </label>
            </div>
            
            { this.state.user.role === 'Client' &&
              <div className="form-setup">
                <label>
                  Street
                  <input type="text" value={this.state.user.address.street} />
                </label>
              </div>
            }
            { this.state.user.role === 'Client' &&
              <div className="form-setup">
                <label>
                  Number
                  <input type="text" value={this.state.user.address.number} />
                </label>
              </div>
            }
            { this.state.user.role === 'Client' &&
              <div className="form-setup">
                <label>
                  Zipcode
                  <input type="text" value={this.state.user.address.zipcode} />
                </label>
              </div>
            }

            <div>
              <button type="submit" className="auth-button">Edit Profile</button>
              {this.state.message && <h4>{this.state.message}</h4>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}