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
      this.setState({
        'userName': responseJson[0].username,
        'userIcon': responseJson[0].img,
        'userPoints': responseJson[0].alltime,
        'userPointsRecent': responseJson[0].recent
      });
    });

  }


  renderUsers(i) {
  /*  let combined = [];
    let name = this.state.userName.slice();
    let icon = this.state.userIcon.slice();
    let points = this.state.userPoints.slice();
    let recentPoints = this.state.userPointsRecent.slice();
    name.forEach((element, index) => {
      combined.push({'userName': name[index], 'userIcon': icon[index], 'userPoints': points[index], 'userPointsRecent': recentPoints[index]});
    });
    combined.sort(function (a,b){
      return b.userPoints - a.userPoints;
    })
    combined.forEach((element, index) => {
      this.setState({
        userName: combined[index].userName,
        userIcon: combined[index].userIcon,
        userPoints: combined[index].userPoints,
        userPointsRecent: combined[index].userPointsRecent
      })
    });*/

    return (
      <User
        userName={this.state.userName}
        userIcon={this.state.userIcon}
        userPoints={this.state.userPoints}
        userPointsRecent={this.state.userPointsRecent}
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
