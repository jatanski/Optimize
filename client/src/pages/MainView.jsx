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
      console.log(data);
      return data;

    } catch (ex) {
      console.log('Exception:', ex)
    }
  }

  getTeam = async () => {
    try {
      const response = await fetch(`${baseUtils.baseApiUrl}teams/`, {
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
    // const team = this.getFakeInfo();
    let team = await this.getTeam();
    console.log("team ", team)
    
    if (typeof team === "string" ) { team = false };
    user.teams = team;

    this.setState({
        team: team,
        user: user
      })
  };

  render = () => {
    return (
      <React.Fragment>
        <div style={{marginBottom: '2rem'}} className="main-content__top-bar">Dashboard</div>
          { this.state.team ? <InTeam user={ this.state.user } /> : <TeamLess /> }
      </React.Fragment>
    );
  };
}

export default MainView;