import React from "react";
import profile from "./../../img/profile.jpg";
import logo from "./../../img/logo2.jpg";
import "./Home.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar className="navbarMenu px-4  py-1 d-flex justify-content-between m-3" expand="lg">
        <Link to="/">
          <Navbar.Brand
            className="text-white d-flex align-items-center text-decoration-none"
            style={{ display: "flex", alignItem: "center" }}
            href="#home">
            <img src={logo} style={{ width: "50px" }} alt="logo" />
            &nbsp; &nbsp;<h4 className="mb-0">BeParents</h4>
          </Navbar.Brand>
        </Link>
        <Navbar id="basic-navbar-nav">
          <Nav className="ml-auto " style={{ position: "relative" }}>
            <Link to="/profile">
              <img
                className="thumbnail-image"
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                src={profile}
                alt="user pic"
              />
            </Link>
            <NavDropdown className="ml-auto" id="basic-nav-dropdown">
              <Link to="/login">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              </Link>
              <Link to="/signup">
                <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
              </Link>
              <Link to="/professional-signup">
                <NavDropdown.Item href="#action/3.2">Professional Signup</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Navbar>
    </>
  );
};
export default Header;
