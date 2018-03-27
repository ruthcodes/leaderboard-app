import React, { Component } from 'react';
import './App.css';
import { MyButton } from './Button';
import { User } from './User';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import './bootstrap.min.css';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
          userName: ["roo", "beh", "cas", "mum", "dad"],
          userIcon: ["ash", "goo", "gas", "cor", "ste"],
          userPoints: [30, 40, 20, 50, 10],
          userPointsRecent: [5, 2, 20, 20, 15]
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e){
    this.setState({
      //this needs to be set and sort based on button click
    });
  }
  renderUsers(i) {
  return (
    <User
      userName={this.state.userName[i]}
      userIcon={this.state.userIcon[i]}
      userPoints={this.state.userPoints[i]}
      userPointsRecent={this.state.userPointsRecent[i]}
    />
  );
}

  render() {
    return (
      <div>
        {Array.from(Array(5), (_, x) => this.renderUsers(x))}
        <MyButton />
      </div>
    );
  }
}

export default List;
