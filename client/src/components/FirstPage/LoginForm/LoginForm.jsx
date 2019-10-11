import React, { Component } from "react";
import LoginFormView from "./LoginFormView";
import baseModel from "../../../utils/baseUtils";
import { allActions } from "../../../redux/store";

class LoginForm extends Component {
  state = {
    loginFormEmail: "",
    loginFormPassword: "",
    showSpinner: false
  };

  endpoint = "auth";

  handleInputChange = e => {
    const state = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  login = async e => {
    e.preventDefault();

    try {
      const loginData = {
        email: this.state.loginFormEmail,
        password: this.state.loginFormPassword
      };

      this.setState({ showSpinner: true }, async () => {
        console.log("Try logging...");
        const response = await fetch(baseModel.baseApiUrl + this.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData)
        });

        const token = response.headers.get("x-auth-token");
        const data = await response.json();
        baseModel.saveAuthToken(token);
        baseModel.save("user", data);
        console.log("Logging...");
        allActions.logIn();
        this.props.history.push("/home");
      });
    } catch (error) {
      this.setState({ showSpinner: false });
      console.error(error);
    }
  };

  loginFormProps = {
    handleInputChange: this.handleInputChange,
    login: this.login,
    changeFormToRegister: this.props.changeFormToRegister,
    changeFormToForgetPass: this.props.changeFormToForgetPass
  };

  render = () => {
    return (
      <LoginFormView
        showSpinner={this.state.showSpinner}
        value={this.state.loginFormEmail}
        {...this.loginFormProps}
      ></LoginFormView>
    );
  };
}

export default LoginForm;
