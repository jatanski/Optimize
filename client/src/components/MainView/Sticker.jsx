import React, { Component } from "react";
import { MDBContainer, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCard } from "mdbreact";

class Sticker extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      category: props.category,
      name: props.name,
      content: props.content,
    });
  }

  setColor = () => {
    const category = this.state.category;

    if (category === "Front") {
      return 'amber'
    } else if (category === "Back") {
      return 'deep-orange'
    } else {
      return 'indigo'
    }
  }

  render = () => {
    return (
      <MDBContainer className="sticker">
        <MDBCard style={{ marginTop: "1rem" }}>
          <MDBCardHeader color={`${this.setColor()} lighten-1`}>{this.state.category}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{this.state.name}</MDBCardTitle>
            <MDBCardText>
              {this.state.content}
            </MDBCardText>
            <MDBBtn color={this.setColor()}>Go to thread</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  };
}

export default Sticker;