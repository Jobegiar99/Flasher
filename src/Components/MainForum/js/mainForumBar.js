import React, {Component} from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import "../css/mainForumBar.css"
export default class MainForumBar extends React.Component{
    render(){
        return(
            <Row id="mainForumBarRow">
                <Col xs={6}>
                    <div id="mainForumBarTitleDiv">
                        <h1 id="mainForumBarTitle">
                            {this.props.subForumTitle}
                        </h1>
                    </div>
                </Col> 
                <Col xs={6}>
                        <div align="right" id="mainForumBarImageDiv">
                            <Image fluid
                                id = "mainForumTrashIcon"
                                src="images/trashIcon.png"
                            />
                        </div>
                </Col>
            </Row>
        )
    }
}