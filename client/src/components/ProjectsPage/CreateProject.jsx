import React, { Component } from "react";
import View from "./CreateProjectView";
import axios from "axios";
import baseModel from "../../utils/baseUtils";

export default class CreateProject extends Component {
  state = {
    teamName: "",
    listOfMembers: [],
    listOfUsers: [],
    listOfRoles: [],
    slackId: ""
  };

  componentDidMount() {
    console.log("ide");
    axios.get(baseModel.baseApiUrl + this.endpointUserList).then(response => {
      console.log(response.data);
      this.setState({ listOfUsers: response.data });
    });
  }

  endpoint = "teams";
  endpointUserList = "listofusers";

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  addUserToList = e => {
    this.setState({
      listOfMembers: [...this.state.listOfMembers, e.target.id]
    });
    console.log(e.target.id);
  };

  addRoleToList = e => {
    this.setState({
      listOfRoles: [...this.state.listOfRoles, e.target.id]
    });
    console.log(e.target.id);
  };

  createProject = async () => {
    console.log(this.state.listOfUsers);

    const slackIds = [];
    this.state.listOfUsers.forEach(user => {
      this.state.listOfMembers.forEach(member => {
        // console.log(member);
        // console.log(user);
        if (user._id == member) {
          console.log("weszło");
          slackIds.push(user.slackId);
        }
      });
    });

    console.log(slackIds);

    const slackId = slackIds.join(",");

    console.log("działa");
    const token = baseModel.getAuthToken();
    console.log(token);
    const data = {
      name: this.state.teamName,
      description: "Fajny",
      users: this.state.listOfMembers,
      roles: this.state.listOfRoles,
      slackId: slackId
    };

    console.log(data);
    try {
      const token = baseModel.getAuthToken();
      const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify(data)
      });

      const dataf = await response.json();
      console.log(dataf);
    } catch (error) {
      this.setState({ showSpinner: false });
      console.error(error);
    }
  };

  viewProps = {
    createProject: this.createProject,
    addUserToList: this.addUserToList,
    handleInputChange: this.handleInputChange,
    addRolesToList: this.addRoleToList
  };
  render() {
    return (
      <View listOfUsers={this.state.listOfUsers} {...this.viewProps}></View>
    );
  }
}
