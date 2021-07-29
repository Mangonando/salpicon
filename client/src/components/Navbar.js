import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import "./Navbar.css";

export default function Navbar(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null);
    });
  };

  return (
    //Remember to call Client and/or Specialist. Capital letter!
      <nav className="navbar">
        <div className="navbar-left">
          <Link className="logo" to="/">Salpicon</Link>
        </div>
        <div className="navbar-right">
          {props.user ? (
            <>
              {/* {props.user.role === 'Client' ? <Link to="/" onClick={() => handleLogout()}>Client Log Out</Link>:<Link to="/" onClick={() => handleLogout()}>Specialist Log Out</Link>} */}
              { props.user.role === "Client" &&
                <Link to="/client-profile" className="navbar-button">Profile</Link>
              }
              { props.user.role === "Specialist" &&
                <Link to="/specialist-profile" className="navbar-button">Profile</Link>
              }
              <Link to="/" onClick={() => handleLogout()}>Log Out</Link>
              
            </>
          ) : (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link className="navbar-button" to="/login">Log In</Link>
              {/* <Link to="/specialist-signup">Specialist Sign Up</Link>
              <Link to="/specialist-login">Specialist Log In</Link> */}
            </>
          )}
        </div>
      </nav>
  );
}
