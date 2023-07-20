import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postProfessionalUser } from "../../redux/actions/auth";

const ProfessionalSignup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      surname,
      email,
      password,
      profession,
      registrationNumber,
      description,
    };
    dispatch(postProfessionalUser(payload));
    navigate("/login");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Professional signup</h2>
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
      <Form.Group controlId="formProfession">
        <Form.Label>Profession</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your profession"
          value={profession}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setProfession(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formRegistrationNumber">
        <Form.Label>Registration Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your registration number"
          value={registrationNumber}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter a description"
          value={description}
          className="p-3 text-white border border-primary bg-transparent opacity-0.05"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <Button variant="primary" className=" bg-transparent " type="submit">
        Submit
      </Button>
      <Link to="/signup">
        <Button className=" bg-transparent ">Sign Up Standard</Button>
      </Link>
    </Form>
  );
};

export default ProfessionalSignup;
