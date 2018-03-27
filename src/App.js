import React, { Component } from 'react';
import './App.css';
import { MyButton } from './Button';
import { User } from './User';
import './bootstrap.min.css';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      myUser: [
          {userName: ["roo", "beh", "cas", "mum", "dad"]},
          {userIcon: ["ash", "goo", "gas", "cor", "ste"]},
          {userPoints: [30, 40, 20, 50, 10]},
          {userPointsRecent: [5, 2, 20, 20, 15]}
        ]
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
      userName={this.state.myUser[0].userName[i]}
      userIcon={this.state.myUser[1].userIcon[i]}
      userPoints={this.state.myUser[2].userPoints[i]}
      userPointsRecent={this.state.myUser[3].userPointsRecent[i]}
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
