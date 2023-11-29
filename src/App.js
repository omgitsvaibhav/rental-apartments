import NavBar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
