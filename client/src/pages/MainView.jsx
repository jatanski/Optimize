import React, { Component } from "react";
import InTeam from "../components/MainView/InTeam";
import TeamLess from "../components/MainView/TeamLess";
import { MDBContainer } from "mdbreact";
import "../components/MainView/MainView.scss";
import baseUtils from "../utils/baseUtils";

class MainView extends Component {
  state = { 
    team: null, 
    user: null 
  }

  componentDidMount = () => {
    this.init();
  }

  getFakeInfo = () => {
    const project = {
      name: "Project/Team Name",
      description: "Some kind of description, projects targets etc",
      users: [this.state.user],
      threads: [
        {
          name: "Thread title",
          author: "author@email",
          posted_at: Date.now(),
          content: "Thread content, questions, ideas etc... Thread content, questions, ideas etc... Thread content, questions, ideas etc...",
          category: "Front",
          comments: []
        },
        {
          name: "Thread title",
          author: "author@email",
          posted_at: Date.now(),
          content: "Thread content, questions, ideas etc... Thread content, questions, ideas etc... Thread content, questions, ideas etc...",
          category: "Back",
          comments: []
        },
        {
          name: "Thread title",
          author: "author@email",
          posted_at: Date.now(),
          content: "Thread content, questions, ideas etc... Thread content, questions, ideas etc... Thread content, questions, ideas etc...",
          category: "Back",
          comments: []
        },
        {
          name: "Thread title",
          author: "author@email",
          posted_at: Date.now(),
          content: "Thread content, questions, ideas etc... Thread content, questions, ideas etc... Thread content, questions, ideas etc...",
          category: "General",
          comments: []
        }
      ]
    }

    return project;
  };

  getUser = async () => {
    try {
      const response = await fetch(`${baseUtils.baseApiUrl}users/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...baseUtils.getAuthTokenHeaderObj()
        }
      });
      let data;
      if (response.headers.get("Content-Type").indexOf("text") >= 0) {
        data = await response.text();
      } else {
        data = await response.json();
      } 

      return data;

    } catch (ex) {
      console.log('Exception:', ex)
    }
  }

  
  init = async () => {
    let user = await this.getUser();
    const team = this.getFakeInfo();

    user.teams = team;

    this.setState({
        team: user.teams,
        user: user
      })
  };

  render = () => {
    return (
      <MDBContainer fluid>
        { this.state.team ? <InTeam user={ this.state.user } /> : <TeamLess /> }
      </MDBContainer>
    );
  };
}

export default MainView;