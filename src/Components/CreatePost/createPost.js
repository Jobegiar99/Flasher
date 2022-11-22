import React, { Component, useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  CreateDocument,
  ReadDocument,
  DeleteDocument,
} from "../../js/db/dbFunctions";

function CreatePost() {
  const history = useHistory();
  let { forumId } = useParams();

  const [forumTitle, setForumTitle] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const get = () => {
    ReadDocument("arquitecturaxd").then((data) => {
      data.forEach((forum) => {
        if (forum.id === forumId) {
          setForumTitle(forum.title);
        }
      });
    });
  };

  useEffect(() => {
    get();
  }, []);

  const handleSubmit = (event) => {
    CreateDocument(`arquitecturaxd/${forumId}/posts`, {
      title: postTitle,
      description: postDescription,
      likes: 0,
      dislikes: 0,
    });

    history.push("/subForum/" + forumId);
  };
  return (
    <Container>
      <h1>New Post on {forumTitle}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formCreatePost">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            size="lg"
            type="email"
            placeholder="e.g. Why does my cat like coffee?"
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            componentClass="textarea"
            as="textarea"
            rows="3"
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </Form.Group>
        {/* 
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a file</Form.Label>
          <Form.Control type="file" />
        </Form.Group> */}

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
