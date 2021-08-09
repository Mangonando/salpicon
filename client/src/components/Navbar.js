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
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="logo" to="/">
          Salpicon
        </Link>
      </div>
      <div className="navbar-right">
        {props.user ? (
          <>
            {props.user.role === "Client" && (
              <Link to="/client-profile" className="navbar-button">
                Profile
              </Link>
            )}
            {props.user.role === "Specialist" && (
              <Link to="/specialist-profile" className="navbar-button">
                Profile
              </Link>
            )}
            <Link to="/" onClick={() => handleLogout()}>
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link className="navbar-button" to="/login">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
