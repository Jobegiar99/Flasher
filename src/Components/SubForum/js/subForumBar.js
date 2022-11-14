import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/subForumBar.css";
function SubForumBar(props) {
  const id = 12000;
  return (
    <Row id="subForumBarRow">
      <Col xs={3}>
        <Link to={`/post/${id}`} style={{ textDecoration: "none" }}>
          <div id="subForumBarTitleDiv">
            <h4 id="subForumBarTitle">{props.postTitle}</h4>
          </div>
        </Link>
      </Col>

      <Col xs={3}>
        <Link to={`/removeSubForum/${props.postTitle}`}>
          <Image
            fluid
            id="mainForumTrashIcon"
            src="/images/trashIcon.png"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>
      </Col>

      <Col xs={3}>
        <div align="right" className="subForumBarImageDiv">
          <Image
            fluid
            id="mainForumTrashIcon"
            src="/images/likeIcon.png"
            style={{ height: "50px", width: "50px" }}
          />
          <h2>10</h2>
        </div>
      </Col>

      <Col xs={3}>
        <div align="right" className="subForumBarImageDiv">
          <Image
            fluid
            id="mainForumTrashIcon"
            src="/images/dislikeIcon.png"
            style={{ height: "50px", width: "50px" }}
          />
          <h2>10</h2>
        </div>
      </Col>
    </Row>
  );
}

export default SubForumBar;
