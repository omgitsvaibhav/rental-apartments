import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.css";

function LoginPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

    return (
      !isAuthenticated && (
      <button className="Login" onClick={handleLogin}>
        Login
      </button>)
    );
}

export default LoginPage;
