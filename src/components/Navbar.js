import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="top-navbar">
      <div className="Navbar-title">
        <Link className="logo" to="/">
          LOGO
        </Link>
      </div>
      <div className="HomeAndLoginAndSearch">
        <Link className="Home" to="/">
          Home
        </Link>
        <Link className="Login" to="/LoginPage">
          Login
        </Link>

        <div class="search">
          <form role="search" id="form">
            <input type="search" id="query" name="q" placeholder="search..." />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
