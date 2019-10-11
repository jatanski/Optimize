import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
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
    <MDBContainer>
      <MDBRow>
        <MDBCol className="center" md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
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
                      type="password"
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
                  <MDBBtn onClick={register} color="deep-orange" type="submit">
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
                <div className="font-weight-light">
                  <p>
                    Are you member?
                    <span onClick={changeForm} className="activeLink">
                      {" "}
                      Sign in
                    </span>
                  </p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterFormView;
