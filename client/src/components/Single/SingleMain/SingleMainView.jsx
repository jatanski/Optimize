import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

const SingleMainView = props => {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle className="d-flex justify-content-between">
          <span>{props.name}</span>
          <span>{props.category}</span>
        </MDBCardTitle>
        <MDBCardText>{props.content}</MDBCardText>
        <section className="single-post__image">
          {props.screens
            ? props.screens.map((screen, i) => (
                <img alt={`img number ${i}`} key={i} src={screen} />
              ))
            : null}
        </section>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleMainView;
