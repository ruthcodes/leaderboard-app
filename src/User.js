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
          <Col className="userDetails" xs={6} sm={2} md={2} lg={2} xl={2}><img src={this.props.userIcon}/></Col>
          <Col className="userDetails" xs={6} sm={6} md={6} lg={6} xl={6}>{this.props.userName}</Col>
          <Col className="userDetails" xs={6} sm={2} md={2} lg={2} xl={2}>Total: {this.props.userPoints}</Col>
          <Col className="userDetails" xs={6} sm={2} md={2} lg={2} xl={2}>Recent: {this.props.userPointsRecent}</Col>
        </Row>
      </Grid>
    );
  }

  componentWillUpdate(){
    //another api call. Possibly unecessary
  }
}
