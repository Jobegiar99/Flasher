import React, { Component } from "react";
import { Image, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { SignIn } from "../../js/db/authFunctions";
import { useHistory } from "react-router-dom";

function LoginRegister(props) {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    SignIn(email, password)
      .then((user) => {
        console.log("User: ", user);
        props.setIsSignedIn(true);
        history.push("/", {
          contentOfLocationState: true,
        });
      })
      .catch((error) => {
        console.log("Error Creating User: ", error);
      });
    event.preventDefault();
  };

  return (
    <Container>
      <br></br>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Create an account</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <br />
            <br />
            <Link to="/signUp">
              <Button variant="secondary" size="sm">
                Dont have an account? Create one
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginRegister;
