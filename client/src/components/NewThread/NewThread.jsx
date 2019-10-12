import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

class NewThread extends Component {
  constructor (props) {
    super(props);
  }

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  addThread = e => {
    e.preventDefault()
    console.log(this.state)
  };

  render = () => {
    return (
        <div>
          <MDBInput onChange={this.handleInputChange} label="Thread name" id="name" />
          <div>
            <select onChange={this.handleInputChange} id="category" className="browser-default custom-select">
              <option>Choose Category</option>
              <option value="Feedback Request">Feedback Request</option>
              <option value="Ask Question">Ask Question</option>
              <option value="Quick Form" disabled>Quick Form</option>
            </select>
            <br /><br />
            <select onChange={this.handleInputChange} id="targetRole"className="browser-default custom-select">
              <option>Target Role</option>
              <option value="Front">Front</option>
              <option value="Back">Back</option>
              <option value="General">General</option>
            </select>
          </div>
          <br />
          <MDBInput onChange={this.handleInputChange} id="content" type="textarea" label="Thread content" rows="5" />
          <MDBBtn type="submit" onClick={this.addThread} >Add Thread</MDBBtn>
          
        </div>
    );
  };
}

export default NewThread;