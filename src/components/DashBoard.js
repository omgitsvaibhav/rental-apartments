import React from "react";
import "./DashBoard.css";
import { useAuth0 } from "@auth0/auth0-react";

function DashBoard() {
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
      return <div>loading...</div>
    }

    return (
        isAuthenticated && (
      <div className="search">
        <form role="search" id="form">
          <input type="search" id="query" name="q" placeholder="search..." />
        </form>
      </div>)
    );
}

export default DashBoard;
