import React from "react";
import DashBoard from "./DashboardPage/DashBoard";
//import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./Navbar";
import Footer from "./Footer";

function HomePage() {
  //const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default HomePage;
