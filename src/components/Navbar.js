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
            <span className="logo" to="/">
              LOGO
            </span>
          </div>
          <LoginPage />
        </>
      )}
      {isAuthenticated && (
        <>
          <div className="Navbar-title">
            <span className="logo" >
              LOGO
            </span>
          </div>
          <div className="HomeAndAuthentication">
            <Link className="Home" to="/">
              Home
            </Link>
            <LogoutButton />
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
