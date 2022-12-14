import React, { Component, } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  ReadDocument,
  DeleteDocument,
} from "../../js/db/dbFunctions";

function RemoveFromPage() {
  let { forumId } = useParams();
  const history = useHistory();

  const handleClick = (event) => {
    DeleteDocument("arquitecturaxd", forumId);
    history.push("/");
  };

  return (
    <Container>
      <h1>Remove Sub Forum {forumId}</h1>
      If you delete this forum, all of it's posts will be deleted. Are you sure you want to delete this forum?
      <br></br>
      <br></br>
        <Button variant="danger" onClick={handleClick}>Delete</Button>
    </Container>
  );
}

export default RemoveFromPage;
