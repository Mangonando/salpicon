import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientSignup from "./components/ClientSignup";
import ClientLogin from "./components/ClientLogin";
import ClientDashboard from "./components/ClientDashboard";
import SpecialistSignup from "./components/SpecialistSignup";
import SpecialistLogin from "./components/SpecialistLogin";
import SpecialistDashboard from "./components/SpecialistDashboard";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} setUser={this.setUser} />
        <div>
        <Route
          exact
          path="/signup"
          render={(props) => <ClientSignup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <ClientLogin setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/client-dashboard"
          render={(props) => (
            <ClientDashboard setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/specialist-signup"
          render={(props) => (
            <SpecialistSignup setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/specialist-login"
          render={(props) => (
            <SpecialistLogin setUser={this.setUser} {...props} />
          )}
        />
        <Route
          exact
          path="/specialist-dashboard"
          render={(props) => (
            <SpecialistDashboard setUser={this.setUser} {...props} />
          )}
        />
        </div>
      </div>
    );
  }
}

export default App;

//Video Hero: Where should I have it?
// {/* <div className="video-hero">
//           <video width="100%" height="100%" autoplay loop muted>
//             <source src="/assets/homepageVideo/pexels-c-technical-5870556.mp4" type="video/mp4" />
//           </video>
//         </div> */}
