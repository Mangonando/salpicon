import React from "react";
import { Link } from 'react-router-dom';
import { logout } from "../services/auth";

export default function Navbar(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null);
    });
  };

  return (
      <nav>
        <Link to='/'>Home</Link>
        <>
        <Link to='/signup'>Sign Up</Link>
        </>
      </nav>
  )
}
