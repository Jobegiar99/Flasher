import React, { Component, useState, useMemo, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import MainForumBar from "./mainForumBar";
import { Link } from "react-router-dom";
import "../css/mainForum.css";

import {
  CreateDocument,
  ReadDocument,
  DeleteDocument,
} from "../../../js/db/dbFunctions";
import { CheckAuth } from "../../../js/db/authFunctions";
import { useHistory } from "react-router-dom";

function MainForum() {
  const history = useHistory();

  const [uid, setUid] = useState("");

  const [isMod, setIsMod] = useState(false);

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      history.push("/login");
    }
  }, []);

  const [subForums, setSubForums] = useState([]);

  const get = () => {
    ReadDocument("arquitecturaxd").then((data) => {
      setSubForums(data);
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

  const forumBars = subForums.map((subForum) => {
    return (
      <MainForumBar
        subForumTitle={subForum.title}
        subForumDescription={subForum.description}
        id={subForum.id}
        isMod={isMod}
      />
    );
  });

  return (
    <Container fluid id="mainForumContainer">
      <Row>
        <Col>
          <div id="mainForumButtonDiv">
            <Link to="/createSubForum">
              <Button variant="dark"> Create Sub Forum</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row id="mainForumSubForumRow">
        <div align="center" id="mainForumSubForums">
          {forumBars}
        </div>
      </Row>
    </Container>
  );
}

export default MainForum;
