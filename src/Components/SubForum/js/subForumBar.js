import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash, HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";

import { CreateDocument, ReadDocument, DeleteDocument } from "../../../js/db/dbFunctions";

import "../css/subForumBar.css";
function SubForumBar(props) {
  const [id, setId] = React.useState(props.id);
  const get = ReadDocument("arquitecturaxd").then((data) => {
    data.forEach((element) => {
    })
  });
  return (
    <Row id="subForumBarRow">
      <Col xs={3}>
        <Link to={`/post/${props.forumId}/${id}`} style={{ textDecoration: "none" }}>
          <div id="subForumBarTitleDiv">
            <h4 id="subForumBarTitle">{props.postTitle}</h4>
          </div>
        </Link>
      </Col>

      <Col xs={6}></Col>
      <Col xs={1}>
        <Link to={`/removePost/${props.forumId}/${props.id}`}>
          <Trash size={30} style={{ marginTop: "30px" }} />
        </Link>
      </Col>

      <Col xs={1}>
        <div align="right" className="subForumBarImageDiv">
          <HandThumbsUp size={30} style={{ marginTop: "15px" }} />
          <h2>{props.numLikes}</h2>
        </div>
      </Col>

      <Col xs={1}>
        <div align="right" className="subForumBarImageDiv">
          <HandThumbsDown size={30} style={{ marginTop: "15px" }} />
          <h2>{props.numDislikes}</h2>
        </div>
      </Col>
    </Row>
  );
}

export default SubForumBar;
