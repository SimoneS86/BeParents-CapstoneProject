import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
//prova
import { resetPosts } from "../../redux/actions/post";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //prova
  useEffect(() => {
    dispatch(resetPosts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
    const body = { email, password };
    dispatch(login(JSON.stringify(body)));
    navigate("/");
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

      <Button className=" bg-transparent p-2 mb-2" type="submit">
        LOG IN
      </Button>
      <Link to="/signup">
        <Button className=" bg-transparent p-2 mb-2">Sign Up Standard</Button>
      </Link>
      <Link to="/professional-signup">
        <Button className=" bg-transparent p-2 mb-2">Sign Up Professional</Button>
      </Link>
    </Form>
  );
};

export default Login;
