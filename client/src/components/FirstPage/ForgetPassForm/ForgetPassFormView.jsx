import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter
} from "mdbreact";

const ForgetPassFormView = ({ changeForm }) => {
  return (
      <div className="firstView__loginForm h-100">
        <img className="logo" src="/logofav.png" width="37" height="37" alt="logo"/>
        <MDBContainer className="ml-sm-5">
          <p className="h4 text-left py-4 ml-3">Restore password </p>
          <MDBRow className="vw-93">
            <MDBCol className="center mdb-row" w="110">
              <MDBCard className="card-height">
                <MDBCardBody className="h-100 card-align p-2">
                  <form className="card-form">

                    <div className="grey-text">
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        id="forgetFormEmail"
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="deep-orange" type="submit" className="login-btn">
                        Send
                      </MDBBtn>
                    </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light footer-styling">
                      <div onClick={changeForm} className="activeLink">
                        Go to sign in.
                      </div>
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
  );
};

export default ForgetPassFormView;
