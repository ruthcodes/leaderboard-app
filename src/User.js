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
          <Col className="userDetails" xs={6} sm={2} smPush={6} md={2} mdPush={6} lg={2} lgPush={6} xl={2} xlPush={6}>Total: {this.props.userPoints}</Col>
          <Col className="userDetails" xs={6} sm={6} smPull={2} md={6} mdPull={2} lg={6} lgPull={2} xl={6} xlPull={2}>{this.props.userName}</Col>
          <Col className="userDetails" xs={6} sm={2} md={2} lg={2} xl={2}>Recent: {this.props.userPointsRecent}</Col>
        </Row>
      </Grid>
    );
  }

  componentWillUpdate(){
    //another api call. Possibly unecessary
  }
}
