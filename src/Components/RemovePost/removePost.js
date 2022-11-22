import React, { Component, } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  ReadDocument,
  DeleteDocument,
} from "../../js/db/dbFunctions";

function RemovePost() {
  let { forumId, postId } = useParams();
  const history = useHistory();

  const handleClick = (event) => {
    DeleteDocument(`arquitecturaxd/${forumId}/posts`, postId);
    history.push("/");
  };

  return (
    <Container>
      <h1>Remove Post {forumId}</h1>
      If you delete this post, it will be gone for ever. Are you sure you want to delete this forum?
      <br></br>
      <br></br>
        <Button variant="danger" onClick={handleClick}>Delete</Button>
    </Container>
  );
}

export default RemovePost;
