import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./user.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postStandardUser } from "../../redux/actions/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      surname,
      email,
      password,
    };
    dispatch(postStandardUser(payload));
    // console.log("Submitted:", { name, surname, email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Signup Standard</h2>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your surname"
          value={surname}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setSurname(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Button type="submit" className=" bg-transparent ">
        SIGN UP
      </Button>
      <Link to="/professional-signup">
        <Button className=" bg-transparent ">Sign Up Professional</Button>
      </Link>
    </Form>
  );
};

export default Signup;
