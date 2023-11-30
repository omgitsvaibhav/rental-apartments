import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.css";

function LoginPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      !isAuthenticated && (
      <button className="Login" onClick={()=> loginWithRedirect()}>
        Login
      </button>)
    );
}

export default LoginPage;
