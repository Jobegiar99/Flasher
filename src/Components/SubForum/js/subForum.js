import React,{Component} from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import SubForumBar from "./subForumBar";
import "../css/subForum.css"

export default class SubForum extends React.Component{
    render(){
        return(
            <Container fluid
                id = "subForumContainer">
                <Row>
                    <Col>
                        <div id="subForumButtonDiv">
                            <Button variant = "dark"> 
                                Create Post
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row id = "subForumSubForumRow">
                    <div align="center" id = "subForumPosts">
                        <SubForumBar 
                            postTitle="New pokemon on the way! Check it out!"/>
                        
                        <SubForumBar 
                            postTitle="New pokemon on the way! Check it out!"/>
                        
                        <SubForumBar 
                            postTitle="New pokemon on the way! Check it out!"/>
                        
                        <SubForumBar 
                            postTitle="New pokemon on the way! Check it out!"/>
                        
                        <SubForumBar 
                            postTitle="New pokemon on the way! Check it out!"/>
                    </div>
                </Row>
            </Container>
        )
    }
}