import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export function User(props){
    return (

        <Row className="allUsers">
          <Col className="userDetails" xs={2} sm={2} md={2} lg={2} xl={2}>{props.rank}</Col>
          <Col className="userDetails" xs={2} sm={2} md={2} lg={2} xl={2}><img src={props.userIcon}/></Col>
          <Col className="userDetails" xs={4} sm={4} md={4} lg={4} xl={4}><a href={props.hyperLink} target="_blank">{props.userName}</a></Col>
          <Col className="userDetails" xs={2} sm={2} md={2} lg={2} xl={2}>{props.userPoints}</Col>
          <Col className="userDetails" xs={2} sm={2} md={2} lg={2} xl={2}>{props.userPointsRecent}</Col>
        </Row>
    );
}
