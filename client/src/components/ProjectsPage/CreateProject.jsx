import React, { Component } from "react";
import View from "./CreateProjectView";
import axios from "axios";
import baseModel from "../../utils/baseUtils";

export default class CreateProject extends Component {
  state = {
    teamName: "",
    listOfMembers: [],
    listOfUsers: []
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
  };

  createProject = () => {
    console.log("działa");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGEwZjUxY2M1ODA0YzBhZDQ2MTFjYWIiLCJpYXQiOjE1NzA4MzUzNTF9.Tw2cYJe9rkA1WgBzRvzVPoil3h3xOZbKq-yHhaqKGAU";
    const data = {
      name: this.state.teamName,
      description: "Fajny",
      users: this.state.listOfMembers
    };

    console.log(data);
    axios
      .post(baseModel.baseApiUrl + this.endpoint, JSON.stringify(data), {
        "Content-Type": "application/json",
        "x-auth-token": token["x-auth-token"]
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  viewProps = {
    createProject: this.createProject,
    addUserToList: this.addUserToList,
    handleInputChange: this.handleInputChange
  };
  render() {
    return (
      <View listOfUsers={this.state.listOfUsers} {...this.viewProps}></View>
    );
  }
}
