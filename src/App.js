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
      userName: [],
      userIcon: [],
      userPoints: [],
      userPointsRecent: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  handleClick(e){
    let url;
    if (e.target.id == "allTime"){
      url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    } else {
      url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    }
    this.fetchData(url);
  }

  fetchData(url){
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
    this.fetchData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  }


  renderUsers(i) {
    return (
      <User
        userName={this.state.userName[i]}
        hyperLink={"https://www.freecodecamp.org/" + this.state.userName[i]}
        userIcon={this.state.userIcon[i]}
        userPoints={this.state.userPoints[i]}
        userPointsRecent={this.state.userPointsRecent[i]}
      />
    );
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <Row className="headers">
              <Col className="myTitle" sm={12} md={12} lg={12} xl={12}><h1>freeCodeCamp Leaderboard</h1></Col>
            </Row>
          </Grid>
        </Jumbotron>
          <Grid>
            <Row>
            <Col sm={12} md={12} lg={12} xl={12} className="buttons">
              <MyButton onClick={this.handleClick} />
            </Col>
          </Row>
        </Grid>
        <Row className="tableHeads">
          <Col xs={8} sm={8} md={8} lg={8} xl={8}></Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}><h2>Total</h2></Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}><h2>Recent</h2></Col>
        </Row>
        <div className="userList">
          {Array.from(Array(10), (_, x) => this.renderUsers(x))}
        </div>
      </div>
    );
  }
}

export default List;
