import React, { Component } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

import "../css/mainForumBar.css";
function MainForumBar(props) {
  return (
    <Row id="mainForumBarRow">
      <Col lg={6}>
        <Link
          to={`/subforum/${props.subForumTitle}`}
          style={{ textDecoration: "none" }}
        >
          <div id="mainForumBarTitleDiv">
            <h1 id="mainForumBarTitle">{props.subForumTitle}</h1>
          </div>
        </Link>
      </Col>
      <Col xs={6}>
        <div align="right" id="mainForumBarImageDiv">
          <Link to={`/removeSubForum/${props.subForumTitle}`}>
            <Trash size={30} style={{ marginTop: "15px" }} />
          </Link>
        </div>
      </Col>
    </Row>
  );
}
export default MainForumBar;
