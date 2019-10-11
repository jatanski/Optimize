import React, { Component } from "react";
import { MDBContainer, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCard } from "mdbreact";

class Sticker extends Component {

  render = () => {
    return (
      <MDBContainer className="sticker">
        <MDBCard style={{ marginTop: "1rem" }}>
          <MDBCardHeader color="deep-orange lighten-1">Frontend</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Titile of thread</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum.. Lorem ipsum.. Lorem ipsum.. Lorem ipsum.. Lorem ipsum..
            </MDBCardText>
            <MDBBtn color="deep-orange">Go to thread</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  };
}

export default Sticker;