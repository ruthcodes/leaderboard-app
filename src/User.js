import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import './App.css';

export class User extends Component{
  componentWillMount(){
    //api call, save data to const
  }
  render(){
    return (
      <Grid>
        <Row className="allUsers">
          <Col className="userDetails" xs={12} sm={6} md={3} lg={3} xl={3}>Name:{this.props.userName}</Col>
          <Col className="userDetails" xs={12} sm={6} md={3} lg={3} xl={3}>Icon: <img src={this.props.userIcon}/></Col>
          <Col className="userDetails" xs={12} sm={6} md={3} lg={3} xl={3}>Total points: {this.props.userPoints}</Col>
          <Col className="userDetails" xs={12} sm={6} md={3} lg={3} xl={3}>Points this month: {this.props.userPointsRecent}</Col>
        </Row>
      </Grid>
    );
  }

  componentWillUpdate(){
    //another api call. Possibly unecessary
  }
}
