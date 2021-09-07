import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClientSignup from "./components/ClientSignup";
import ClientLogin from "./components/ClientLogin";
import ClientDashboard from "./components/ClientDashboard";
import SpecialistSignup from "./components/SpecialistSignup";
import SpecialistLogin from "./components/SpecialistLogin";
import SpecialistDashboard from "./components/SpecialistDashboard";
import Homepage from "./components/Homepage";
import ClientProfile from "./components/ClientProfile";
import SpecialistProfile from "./components/SpecialistProfile";

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

        <Route exact path="/" render={(props) => <Homepage />} />
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
        <Route
          exact
          path="/client-profile"
          render={(props) => (
            <ClientProfile
              user={this.state.user}
              setUser={this.setUser}
              {...props}
              {...this.state}
            />
          )}
        />
        <Route
          exact
          path="/specialist-profile"
          render={(props) => (
            <SpecialistProfile
              user={this.state.user}
              setUser={this.setUser}
              {...props}
              {...this.state}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
