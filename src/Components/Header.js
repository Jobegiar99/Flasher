import React, { Component, useState, useMemo, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SignOut } from "../js/db/authFunctions";

function Header(props) {

  const handleSignOut = () => {
    SignOut().then(() => {
      props.setIsSignedIn(false);
    });
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      props.setIsSignedIn(true);
    } else {
      props.setIsSignedIn(false);
    }
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Flasher</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {props.isSignedIn ? (
              <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
