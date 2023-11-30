import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/Navbar";
import { AuthenticationGuard } from "./components/authentication-guard";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route
        path="/dashboard"
        element={<AuthenticationGuard component={DashBoard} />}
      />
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  );
}

export default App;
