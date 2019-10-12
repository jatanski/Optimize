import React, { Component } from "react";
import NewThread from "../components/NewThread/NewThread";
import baseUtils from "../utils/baseUtils";

class AddThread extends Component {
  state = {
    user: null,
    teamId: null
  };

  componentDidMount = () => {
    this.init();
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
      console.log("Exception:", ex);
    }
  };

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
      console.log("Exception:", ex);
    }
  };

  init = async () => {
    let user = await this.getUser();
    let team = await this.getTeam();

    console.log(team);

    this.setState({
      user: user,
      teamId: team._id,
      channelId: team.channelId
    });
  };

  render = () => {
    return (
      <NewThread
        channelId={this.state.channelId}
        teamId={this.state.teamId}
      ></NewThread>
    );
  };
}

export default AddThread;
