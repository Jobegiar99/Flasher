import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import MainForumBar from "./mainForumBar";
import { Link } from "react-router-dom";
import "../css/mainForum.css";

export default class MainForum extends React.Component {
  render() {
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
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Terraria" />
            <MainForumBar subForumTitle="Minecraft" />
            <MainForumBar subForumTitle="Terraria" />
          </div>
        </Row>
      </Container>
    );
  }
}
