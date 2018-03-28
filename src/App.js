import React, { Component } from 'react';
import './App.css';
import { MyButton } from './Button';
import { User } from './User';
import './bootstrap.min.css';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: [],
      userIcon: [],
      userPoints: [],
      userPointsRecent: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({
      //this needs to be set and sort based on button click
    });
  }

  componentWillMount(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((response) => response.json())
    .then((responseJson) => {
      var name = responseJson.map(a => a.username);
      var icon = responseJson.map(a => a.img);
      var alltime = responseJson.map(a => a.alltime);
      var recent = responseJson.map(a => a.recent);


    this.setState({
      'userName': name,
      'userIcon': icon,
      'userPoints': alltime,
      'userPointsRecent': recent
    });
    })
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
