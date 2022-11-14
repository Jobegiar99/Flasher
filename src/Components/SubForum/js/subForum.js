import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import SubForumBar from "./subForumBar";
import "../css/subForum.css";

function SubForum () {
    return (
      <Container fluid id="subForumContainer">
        <Row>
          <Col>
            <div id="subForumButtonDiv">
              <Link to="/createPost">
                <Button variant="dark"> Create Post</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row id="subForumSubForumRow">
          <div align="center" id="subForumPosts">
            <SubForumBar postTitle="New pokemon on the way! Check it out!" />

            <SubForumBar postTitle="New pokemon on the way! Check it out!" />

            <SubForumBar postTitle="New pokemon on the way! Check it out!" />

            <SubForumBar postTitle="New pokemon on the way! Check it out!" />

            <SubForumBar postTitle="New pokemon on the way! Check it out!" />
          </div>
        </Row>
      </Container>
    );
}

export default SubForum;