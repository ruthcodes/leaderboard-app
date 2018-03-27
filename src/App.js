import React, { Component } from 'react';
import './App.css';
import { User } from './User';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './bootstrap.min.css';

class List extends Component {
  constructor(props){
    super(props);

    this.state ={
      chosenUser:[
        {
          userName: [],
          userIcon: [],
          userPoints: [],
          userPointsRecent: []
        }
      ]
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    
  }

  handleUserInput(e){
    this.setState({
      //this needs to be set and sort based on button click
    });
  }
  renderUsers(i) {
  return (
    <User
      userName={this.userName[i]}
      userIcon={this.userIcon[i]}
      userPoints={this.userPoints[i]}
      userPointsRecent={this.userPointsRecent[i]}
    />
  );
}

  render() {
    return (
      <div>{ this.renderUsers(0) }</div>

      //Array.from(Array(10), (_, x) => this.renderUsers[x])
    );
  }
}

export default List;
