import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function CreatePost() {
  return (
    <Container>
      <h1>New Post</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formCreatePost">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="e.g. Why does my cat like coffee?"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control componentClass="textarea" as="textarea" rows="3" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a file</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
