import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "./Header";

import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Container style={{marginBottom: "100px" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default Home;
