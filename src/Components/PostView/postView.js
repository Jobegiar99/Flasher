import React, { Component, useEffect, useState } from "react";
import { Image, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

import {
  CreateDocument,
  ReadDocument,
  DeleteDocument,
} from "../../js/db/dbFunctions";

function Comment(props) {
  return (
    <Card style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.user}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function PostView() {
  let { forumId, postId } = useParams();
  console.log(forumId, postId);
  const [post, setPost] = useState({});

  const dir = `arquitecturaxd/${forumId}/posts`;
  console.log(
    dir,
    dir === "arquitecturaxd/J4iA4w0bMJCHGZpDDc0q/posts/8NxT4d6bdpOPasEP8kdf"
  );

  const get = () => {
    ReadDocument(dir).then((data) => {
      data.forEach((post) => {
        if (post.id === postId) {
          setPost(post);
        }
      });
    });
  };

  useEffect(() => {
    get();
  }, []);

  console.log(post);
  return (
    <Container>
      <br></br>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Post by: theFredo1000
          </Card.Subtitle>
          <Card.Text>
            {post.description}
            <br />
            <br />
            {/* <Image
              fluid
              id="mainForumTrashIcon"
              src="/images/canyon.jpeg"
              style={{ width: "50%" }}
            /> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostView;
