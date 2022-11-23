import React, { Component } from "react";
import { Image, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { CreateUser } from "../../js/db/authFunctions";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    CreateUser(email, password)
      .then((user) => {
        console.log("User: ", user);
        props.setIsSignedIn(true);
        history.push("/");
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignUp;
