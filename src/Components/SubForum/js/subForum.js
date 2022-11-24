import React, { Component, useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import SubForumBar from "./subForumBar";
import "../css/subForum.css";

import {
  CreateDocument,
  ReadDocument,
  DeleteDocument,
} from "../../../js/db/dbFunctions";

import { useHistory } from "react-router-dom";

function SubForum() {
  const history = useHistory();
  let { forumId } = useParams();
  const [posts, setPosts] = useState([]);

  const [uid, setUid] = useState("");
  const [isMod, setIsMod] = useState(false);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      history.push("/login");
    }
  }, []);

  const get = () => {
    ReadDocument(`arquitecturaxd/${forumId}/posts`).then((data) => {
      setPosts(data);
      console.log(data);
    });

    ReadDocument("users").then((data) => {
      data.forEach((element) => {
        if (element.id === sessionStorage.getItem("uid")) {
          setUid(element.id);
          setIsMod(element.isMod);
        }
      });
    });
  };

  useEffect(() => {
    get();
  }, []);

  const postBars = posts.map((post) => {
    return (
      <SubForumBar
        postTitle={post.title}
        postDescription={post.description}
        id={post.id}
        numLikes={post.likes ? post.likes : 0}
        numDislikes={post.dislikes ? post.dislikes : 0}
        forumId={forumId}
        isMod={isMod}
      />
    );
  });

  return (
    <Container fluid id="subForumContainer">
      <Row>
        <Col>
          <div id="subForumButtonDiv">
            <Link to={`/createPost/${forumId}`}>
              <Button variant="dark"> Create Post</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row id="subForumSubForumRow">
        <div align="center" id="subForumPosts">
          {posts.length === 0 ? "No posts yet!" : postBars}
        </div>
      </Row>
    </Container>
  );
}

export default SubForum;
