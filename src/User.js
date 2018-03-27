import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './bootstrap.min.css';

export class User extends Component{
  componentWillMount(){
    //api call, save data to const
  }
  render(){
    return (
      <Grid>
        <Row>
          <Col sm={3} md={3} lg={3} xl={3}>Name goes here</Col>
          <Col sm={3} md={3} lg={3} xl={3}>Icon goes here</Col>
          <Col sm={3} md={3} lg={3} xl={3}>Total points goes here</Col>
          <Col sm={3} md={3} lg={3} xl={3}>Points this month goes here</Col>
        </Row>
      </Grid>
    );
  }
}
