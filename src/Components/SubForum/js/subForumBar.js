import React, {Component} from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import "../css/subForumBar.css"
export default class SubForumBar extends React.Component{
    render(){
        return(
            <Row id="subForumBarRow">
                <Col xs={3}>
                    <div id="subForumBarTitleDiv">
                        <h4 id="subForumBarTitle">
                            {this.props.postTitle}
                        </h4>
                    </div>
                </Col> 
                
                <Col xs={3}>
                    <div align="right" className="subForumBarImageDiv">
                        <Image fluid
                            id = "subForumTrashIcon"
                            src="images/trashIcon.png"
                        />
                    </div>
                </Col>

                <Col xs={3}>
                    <div align="right" className="subForumBarImageDiv">
                        <Image fluid
                            id = "mainForumTrashIcon"
                            src="images/likeIcon.png"
                        />
                        <h2>10</h2>
                    </div>
                </Col>

                <Col xs={3}>
                    <div align="right" className="subForumBarImageDiv">
                        <Image fluid
                            id = "mainForumTrashIcon"
                            src="images/dislikeIcon.png"
                        />
                    <h2>10</h2>
                    </div>
                </Col>
                
            </Row>
        )
    }
}