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
    let url;
    if (e.target.id == "allTime"){
      url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    } else {
      url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    }
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      let name = responseJson.map(a => a.username);
      let icon = responseJson.map(a => a.img);
      let alltime = responseJson.map(a => a.alltime);
      let recent = responseJson.map(a => a.recent);


    this.setState({
      'userName': name,
      'userIcon': icon,
      'userPoints': alltime,
      'userPointsRecent': recent
    });
    })
  }

  componentWillMount(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((response) => response.json())
    .then((responseJson) => {
      let name = responseJson.map(a => a.username);
      let icon = responseJson.map(a => a.img);
      let alltime = responseJson.map(a => a.alltime);
      let recent = responseJson.map(a => a.recent);


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
        <MyButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default List;
