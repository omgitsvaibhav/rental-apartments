import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
//import { AuthenticationGuard } from "./components/Authentication/authentication-guard";
import { NotFoundPage } from "./components/NotFoundPage";
//import DashBoard from "./components/DashboardPage/DashBoard";
import ContactForm from "./components/DataUpload/ContactForm";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<NotFoundPage />}/>
      <Route path="/contact" element={<ContactForm/>}/> 
    </Routes>
    </>
  );
}

export default App;
