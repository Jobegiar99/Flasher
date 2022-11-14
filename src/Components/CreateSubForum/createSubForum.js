import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
function CreateSubForum() {
  let { topicId } = useParams();
  return (
    <Container>
      <h1>New Sub Forum</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formCreatePost">
          <Form.Label>Sub Forum Name</Form.Label>
          <Form.Control size="lg" type="email" placeholder="e.g. Pokemon Go" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control componentClass="textarea" as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreateSubForum;
