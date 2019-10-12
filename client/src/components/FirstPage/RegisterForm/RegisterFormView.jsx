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
import RadioInput from "./RegisterFormRadioInput";
import "./registerForm.scss";
import TextInput from "./RegisterFormTextInput";

const RegisterFormView = ({
  changeForm,
  handleInputChange,
  register,
  showSpinner,
  slackNameTrue,
  slackNameFalse,
  showSlackNameInput,
  showIncorrectPassword
}) => {
  const inputs = [
    {
      label: "Your name (Lenght must have minimum 5 characters.)",
      icon: "user",
      type: "text",
      onChange: handleInputChange,
      id: "registerFormName"
    },
    {
      label: "Your mail",
      icon: "envelope",
      type: "email",
      onChange: handleInputChange,
      id: "registerFormEmail"
    },
    {
      label: "Your password (Lenght must have minimum 5 characters.)",
      icon: "lock",
      type: "password",
      onChange: handleInputChange,
      id: "registerFormPassword"
    },
    {
      label: "Confirm your password",
      icon: "exclamation-triangle",
      type: "password",
      onChange: handleInputChange,
      id: "registerFormConfirmPassword"
    }
  ];

  return (
      <div className="firstView__loginForm h-100">
        <img className="logo" src="/logofav.png" width="37" height="37" alt="logo"/>
        <MDBContainer className="ml-sm-5">
          <p className="h4 text-left py-4 ml-3">Sign up</p>
          <MDBRow className="vw-93">
            <MDBCol className="center mdb-row" w="100">
              <MDBCard className="card-height">
                <MDBCardBody className="h-100 card-align p-2">
                  <form className="card-form">
                    <div className="grey-text">
                      {inputs.map(input => {
                        return <TextInput key={input.id} {...input}></TextInput>;
                      })}
                      {showIncorrectPassword ? (
                        <p>Password aren't indencital.</p>
                      ) : null}
                    </div>
                    <div className="firstView__registerForm--radiosInput">
                      <p>Do you want connect your account with Slack?</p>
                      <RadioInput
                        isAdmin={slackNameTrue}
                        id="adminInput"
                        labelText="Yes"
                      ></RadioInput>
                      {showSlackNameInput ? (
                        <MDBInput
                          label="Your slack name"
                          icon="address-card"
                          group
                          type="text"
                          validate
                          onChange={handleInputChange}
                          id="registerFormSlackName"
                        />
                      ) : null}
                      <RadioInput
                        isAdmin={slackNameFalse}
                        id="userInput"
                        labelText="No"
                      ></RadioInput>
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn onClick={register} color="deep-orange" type="submit" className="login-btn">
                        {showSpinner ? (
                          <div
                            className="spinner-grow spinner-grow-sm white text-success"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : null}
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light mr-xl-5">
                      <div>
                        Are you member?
                        <div onClick={changeForm} className="activeLink">
                          {" "}
                          Sign in
                        </div>
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

export default RegisterFormView;
