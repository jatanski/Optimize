import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBBtn } from "mdbreact";
import {withRouter} from 'react-router';

class TeamLess extends Component {
  constructor(props) {
    super(props);
  }

  onClickHandler = () => {
    this.props.history.push('/home/projects');
  }

  render = () => {
    return (
      <React.Fragment>
        <div className="main-content__top-bar">Dashboard</div>
      <MDBContainer style={{ marginTop: "4rem" }}>
        <MDBCard className="text-center team-less-card">
          <MDBCardBody>You are not in any team yet!</MDBCardBody>
          <MDBBtn onClick={this.onClickHandler} outline color="deep-orange" className="w-50 p3" >Create Project</MDBBtn>
        </MDBCard>
      </MDBContainer>
      </React.Fragment>
    );
  };
}

export default withRouter(TeamLess);