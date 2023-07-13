import "./App.css";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router";
import Profile from "./Components/Home/Profile";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import ProfessionalSignup from "./Components/User/Professional";
import HomePage from "./Components/Home/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<HomePage />}/>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="professional-signup" element={<ProfessionalSignup />} />
      </Route>
    </Routes>
  );
}

export default App;
