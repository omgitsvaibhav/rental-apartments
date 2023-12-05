import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginPage from "./Authentication/LoginPage.js";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Authentication/LogoutPage.js";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="top-navbar">
      {!isAuthenticated && (
        <>
          <div className="Navbar-title">
            <Link to="/" className="logo">
              Logo
            </Link >
          </div>
          <div className="links">
          <Link className="contact" to="/contact">
              Contact
            </Link>
          <LoginPage />
          </div>
        </>
      )}
      {isAuthenticated && (
        <>
          <div className="Navbar-title">
            <Link className="logo" to="/">
              Logo
            </Link>
          </div>
          <div className="links">
            <Link className="Home" to="/">
              Home
            </Link>
            <Link className="contact" to="/contact">
              Contact
            </Link>
            <LogoutButton />
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
