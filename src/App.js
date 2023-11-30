import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import { AuthenticationGuard } from "./components/Authentication/authentication-guard";
import { NotFoundPage } from "./components/NotFoundPage";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/" element={<AuthenticationGuard component={DashBoard}/>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  );
}

export default App;
