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
    axios
      .get(baseModel.baseApiUrl + this.endpointUserList)
      .then(response => {
        this.setState({ listOfUsers: response.data });
      })
      .catch(error => console.error(error));
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
  };

  addRoleToList = e => {
    this.setState({
      listOfRoles: [...this.state.listOfRoles, e.target.id]
    });
  };

  createProject = async () => {
    const slackIds = [];
    this.state.listOfUsers.forEach(user => {
      this.state.listOfMembers.forEach(member => {
        if (user._id === member) slackIds.push(user.slackId);
      });
    });

    const slackId = slackIds.join(",");

    const data = {
      name: this.state.teamName,
      description: "Fajny",
      users: this.state.listOfMembers,
      roles: this.state.listOfRoles,
      slackId: slackId
    };

    try {
      const token = baseModel.getAuthToken();
      await fetch(baseModel.baseApiUrl + this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify(data)
      });
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
