import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBBtn } from "mdbreact";

class TeamLess extends Component {

  render = () => {
    return (
      <MDBContainer style={{ marginTop: "1rem" }}>
        <MDBCard className="text-center team-less-card">
          <MDBCardBody>You are not in any team yet!</MDBCardBody>
          <MDBBtn outline color="deep-orange" className="w-50 p3" >Create Team</MDBBtn>
        </MDBCard>
      </MDBContainer>
    );
  };
}

export default TeamLess;