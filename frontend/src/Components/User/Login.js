import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./user.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    const body = { email, password };
    dispatch(login(JSON.stringify(body)));
  };
  return (
    <Form onSubmit={handleSubmit} style={{ height: "70vh" }}>
      <h2>Login</h2>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Button className=" bg-transparent p-3 pr-2 " type="submit">
        LOG IN
      </Button>
      <Link to="/signup">
        <Button className=" bg-transparent ">Sign Up Standard</Button>
      </Link>
      <Link to="/professional-signup">
        <Button className=" bg-transparent ">Sign Up Professional</Button>
      </Link>
    </Form>
  );
};

export default Login;
