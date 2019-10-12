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
import "./loginForm.scss";

const LoginFormDisplay = ({
  handleInputChange,
  login,
  changeFormToRegister,
  changeFormToForgetPass,
  showSpinner,
  value
}) => {
  return (
    <div className="firstView__loginForm h-100">
      <img className="logo" src="/logofav.png" width="37" height="37" alt="logo"/>
      <MDBContainer className="ml-sm-5">
        <p className="h4 text-left py-4 ml-3">Sign in</p>
        <MDBRow className="vw-93">
          <MDBCol className="center mdb-row" w="100">
            <MDBCard className="card-height">
              <MDBCardBody className="h-100 card-align p-2">
                <form className="card-form">
                  <div className="grey-text">
                    <MDBInput
                      onChange={handleInputChange}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      id="loginFormEmail"
                      value={value}
                    />

                    <MDBInput
                      onChange={handleInputChange}
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      id="loginFormPassword"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn onClick={login} type="submit">
                      {showSpinner ? (
                        <div
                          className="spinner-grow spinner-grow-sm white text-success"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : null}
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <div>
                      Not a member?
                      <div
                        onClick={changeFormToRegister}
                        className="activeLink"
                      >
                        {" "}
                        Sign Up
                      </div>
                    </div>
                    <p onClick={changeFormToForgetPass} className="activeLink">
                      Forgot Password?
                    </p>
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

export default LoginFormDisplay;
