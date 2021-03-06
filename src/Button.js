import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './bootstrap.min.css';

export function MyButton(props){
    return (
      <Grid>
        <Row className="alignButtons">
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button id="allTime" onClick={props.onClick}>Sort by all time points</Button>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button id="recent" onClick={props.onClick}>Sort by recent points</Button>
          </Col>
        </Row>
      </Grid>
    );
}
