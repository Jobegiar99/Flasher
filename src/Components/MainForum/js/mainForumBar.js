import React, { Component } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/mainForumBar.css";
function MainForumBar(props) {
  return (
    <Row id="mainForumBarRow">
      <Link to={`/subforum/${props.subForumTitle}`}>
        <Col lg={6}>
          <div id="mainForumBarTitleDiv">
            <h1 id="mainForumBarTitle">{props.subForumTitle}</h1>
          </div>
        </Col>
      </Link>
      <Col xs={6}>
        <div align="right" id="mainForumBarImageDiv">
          <Link to={`/removeSubForum/${props.subForumTitle}`}>
            <Image
              fluid
              id="mainForumTrashIcon"
              src="images/trashIcon.png"
              style={{ width: "30px" }}
            />
          </Link>
        </div>
      </Col>
    </Row>
  );
}
export default MainForumBar;
