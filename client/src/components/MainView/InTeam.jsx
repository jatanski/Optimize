import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardHeader } from "mdbreact";
import Sticker from "./Sticker";

class InTeam extends Component {

  render = () => {
    return (
      <div>
        <MDBContainer style={{ marginTop: "1rem" }}>
          <MDBCardHeader color="deep-orange lighten-1">
            <MDBRow>
              <MDBCol size="6" className="text-left font-weight-bold">Main View</MDBCol>
              <MDBCol size="6" className="text-right font-weight-bold">Project Name</MDBCol>
            </MDBRow>
          </MDBCardHeader>
        </MDBContainer>
        <MDBContainer className="stickers-container">
          {/* alll threads go here <Thread /> */}
          <Sticker />
          <Sticker />
          <Sticker />
          <Sticker />
          <Sticker />
          <Sticker />
        </MDBContainer>
      </div>
    );
  };
}

export default InTeam;