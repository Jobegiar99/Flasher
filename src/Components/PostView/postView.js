import React, { Component } from "react";
import { Image, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

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
  return (
    <Container>
      <br></br>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>New pokemon on the way! Check it out!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Post by: theFredo1000
          </Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque dolor non neque porta eleifend. In finibus posuere
            ipsum quis auctor. In sollicitudin pellentesque purus et interdum.
            Aenean vitae sapien vitae tortor convallis vulputate non et dui. Sed
            venenatis ornare diam. Vivamus mattis et augue non venenatis. Ut
            semper quam tortor, et tincidunt libero luctus eget. Nulla luctus
            tellus placerat fermentum porta.
            <br />
            <br />
            Phasellus posuere, risus vitae aliquam pellentesque, nisi purus
            pellentesque ligula, sit amet sagittis metus eros et nisl. Etiam
            posuere bibendum dui, sit amet vehicula nisl tempor ut. Praesent
            placerat elit id metus pretium elementum. Nunc feugiat libero
            iaculis odio rutrum, quis euismod lacus bibendum. Aliquam ut cursus
            ex. Donec vitae velit rutrum, tincidunt ligula at, molestie mauris.
            Nam dapibus ullamcorper auctor.
            <br />
            <br />
            Sed felis nulla, finibus at dui eget, consequat mattis nibh. Sed
            aliquam velit vitae lacus facilisis, id vestibulum eros porttitor.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi ultrices, metus quis pharetra
            fermentum, libero urna maximus nulla, interdum feugiat magna velit
            sed libero. Curabitur leo nibh, suscipit bibendum condimentum ac,
            facilisis quis eros. Curabitur fermentum non metus quis
            pellentesque. Vivamus volutpat et ex eu ornare. Cras scelerisque
            elit risus, eu ornare orci interdum sit amet. Aliquam commodo risus
            vitae augue lacinia, finibus tincidunt mauris pretium. Sed luctus,
            nisl cursus suscipit consequat, nulla nisl volutpat lectus, vel
            congue ligula tellus ut tortor. Sed quis ultrices justo, vitae
            egestas lectus. Aenean ullamcorper pharetra purus eget imperdiet.
            Phasellus pretium imperdiet hendrerit.
            <br />
            <br />
            <Image
              fluid
              id="mainForumTrashIcon"
              src="/images/canyon.jpeg"
              style={{ width: "50%" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Comment
        title="Nice"
        user="Ernesto1000"
        description="I think it was a good experience that you had"
      />
      <Comment
        title="I hate it"
        user="CoolGuy1000"
        description="I think it was a bad experience that you had"
      />
      
      <Comment
        title="Nice"
        user="Mario1000"
        description=""
      />
    </Container>
  );
}

export default PostView;
