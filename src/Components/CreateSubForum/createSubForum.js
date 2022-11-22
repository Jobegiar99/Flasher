import React, { Component, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  CreateDocument,
  ReadDocument,
  DeleteDocument,
} from "../../js/db/dbFunctions";

function CreateSubForum() {
  const history = useHistory();
  let { forumId } = useParams();

  const [subForumTitle, setSubForumTitle] = useState("");
  const [subForumDescription, setSubForumDescription] = useState("");

  
  const handleSubmit = (event) => {
    CreateDocument("arquitecturaxd", {
      title: subForumTitle,
      description: subForumDescription,
    });

    history.push("/");
  };

  return (
    <Container>
      <h1>New Sub Forum</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCreatePost">
          <Form.Label>Sub Forum Name</Form.Label>
          <Form.Control
            required
            size="lg"
            placeholder="e.g. Pokemon Go"
            onChange={(e) => setSubForumTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            componentClass="textarea"
            as="textarea"
            rows="3"
            onChange={(e) => setSubForumDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreateSubForum;
