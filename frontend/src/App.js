import "./App.css";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router";
import Profile from "./Components/Home/Profile";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import ProfessionalSignup from "./Components/User/Professional";
import HomePage from "./Components/Home/Index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts, getPostsById } from "./redux/actions/post";
import { BrowserRouter } from "react-router-dom";
import { getReminders, getRemindersById } from "./redux/actions/reminder";
import { getFollowedByStndId } from "./redux/actions/followElement";
import { getUserData } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getUserData());
  }, [token]);

  // useEffect(() => {
  //   dispatch(getReminders());
  // }, []);

  // useEffect(() => {
  //   dispatch(getRemindersById());
  // }, []);

  // useEffect(() => {
  //   dispatch(getFollowedByStndId());
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="professional-signup" element={<ProfessionalSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
