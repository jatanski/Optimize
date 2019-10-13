import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import baseUtils from "../../utils/baseUtils";
import "./newThread.scss";
import { withRouter } from "react-router";

class NewThread extends Component {
  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  addThread = async e => {
    e.preventDefault();
    // console.log(this.state);

    console.log(this.props);

    const requestBody = {
      name: this.state.name,
      content: this.state.content,
      category: this.state.targetRole,
      target: this.state.category,
      teamId: this.props.teamId,
      channelId: this.props.channelId
    };

    // name, content, category, target, teamId
    try {
      const response = await fetch(`${baseUtils.baseApiUrl}threads/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...baseUtils.getAuthTokenHeaderObj()
        },
        body: JSON.stringify(requestBody)
      });

      let data;
      if (response.headers.get("Content-Type").indexOf("text") >= 0) {
        data = await response.text();
      } else {
        data = await response.json();
      }
      console.log("Response: ", data);

      this.props.history.push("/home");
    } catch (ex) {
      console.log("Exception:", ex);
    }
  };

  render = () => {
    return (
      <div>
        <MDBInput
          onChange={this.handleInputChange}
          label="Thread name"
          id="name"
          className="mdb-input5"
        />
        <div>
          <select
            onChange={this.handleInputChange}
            id="category"
            className="browser-default custom-select mdb-select"
          >
            <option>Choose Category</option>
            <option value="Feedback Request">Feedback Request</option>
            <option value="Ask Question">Ask Question</option>
            <option value="Quick Form" disabled>
              Quick Form
            </option>
          </select>
          <br />
          <br />
          <select
            onChange={this.handleInputChange}
            id="targetRole"
            className="browser-default custom-select mdb-select"
          >
            <option>Target Role</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="General">General</option>
          </select>
        </div>
        <br />
        <MDBInput
          onChange={this.handleInputChange}
          id="content"
          type="textarea"
          label="Thread content"
          rows="5"
          className="mdb-area"
        />
        <MDBBtn type="submit" onClick={this.addThread} className="ml-5">
          Add Thread
        </MDBBtn>
      </div>
    );
  };
}

export default withRouter(NewThread);
