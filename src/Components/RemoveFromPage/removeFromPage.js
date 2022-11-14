import React, { Component, } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
function RemoveFromPage() {
  let { forumId } = useParams();
  return (
    <Container>
      <h1>Remove Sub Forum {forumId}</h1>
      If you delete this forum, all of it's posts will be deleted. Are you sure you want to delete this forum?
      <br></br>
      <br></br>
        <Button variant="danger">Delete</Button>
    </Container>
  );
}

export default RemoveFromPage;
