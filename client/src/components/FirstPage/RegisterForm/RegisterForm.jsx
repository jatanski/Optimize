import React, { Component } from "react";
import RegisterFormView from "./RegisterFormView";
import baseModel from "../../../utils/baseUtils";
import { allActions } from "../../../redux/store";

class RegisterForm extends Component {
  state = {
    registerFormName: "",
    registerFormEmail: "",
    registerFormPassword: "",
    registerFormConfirmPassword: "",
    registerFormSlackName: "",
    showSlackNameInput: false,
    showSpinner: false,
    showIncorrectPassword: false
  };

  endpoint = "users";

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  handleSlackNameFalse = () => this.setState({ showSlackNameInput: false });

  handleSlackNameTrue = () => this.setState({ showSlackNameInput: true });

  register = async e => {
    e.preventDefault();

    if (
      this.state.registerFormPassword !== this.state.registerFormConfirmPassword
    ) {
      this.setState({ showIncorrectPassword: true });
      return;
    }
    try {
      const registerData = {
        name: this.state.registerFormName,
        email: this.state.registerFormEmail,
        password: this.state.registerFormPassword,
        slackId: this.state.registerFormSlackName
      };

      this.setState({ showSpinner: true }, async () => {
        console.log("Try register...");
        const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerData)
        });

        const type = response.headers.get("Content-Type");
        const token = response.headers.get("x-auth-token");

        if (type.indexOf("text") >= 0) {
          const data = await response.text();
        } else {
          const data = await response.json();

          baseModel.saveAuthToken(token);
          baseModel.save("user", data);
          console.log("Logging...");
          allActions.logIn();
          // this.props.history.push("/dashboard");
        }
      });
    } catch (error) {
      this.setState({ showSpinner: false });
      console.error(error);
    }
  };

  viewProps = {
    changeForm: this.props.changeForm,
    handleInputChange: this.handleInputChange,
    register: this.register,
    slackNameTrue: this.handleSlackNameTrue,
    slackNameFalse: this.handleSlackNameFalse
  };
  render = () => {
    return (
      <RegisterFormView
        showSpinner={this.state.showSpinner}
        showSlackNameInput={this.state.showSlackNameInput}
        showIncorrectPassword={this.state.showIncorrectPassword}
        {...this.viewProps}
      ></RegisterFormView>
    );
  };
}

export default RegisterForm;
