import React, { Component } from "react";
import LoginForm from "../components/FirstPage/LoginForm/LoginForm";
import RegisterForm from "../components/FirstPage/RegisterForm/RegisterForm";
import ForgetPassForm from "../components/FirstPage/ForgetPassForm/ForgetPassForm";

class FirstPage extends Component {
  state = {
    showLoginForm: true,
    showRegisterForm: false,
    showForgetPassForm: false
  };

  changeFormToRegister = () => {
    this.setState({
      showLoginForm: false,
      showRegisterForm: true,
      showForgetPassForm: false
    });
  };

  changeFormToLogin = () => {
    this.setState({
      showLoginForm: true,
      showRegisterForm: false,
      showForgetPassForm: false
    });
  };

  changeFormToForgetPass = () => {
    this.setState({
      showLoginForm: false,
      showRegisterForm: false,
      showForgetPassForm: true
    });
  };

  loginFormProps = {
    changeFormToRegister: this.changeFormToRegister,
    changeFormToForgetPass: this.changeFormToForgetPass,
    history: this.props.history
  };

  registerFormProps = {
    changeForm: this.changeFormToLogin,
    history: this.props.history
  };

  forgetPassFormProps = {
    changeForm: this.changeFormToLogin
  };

  render = () => {
    return (
      <section className="firstView">
        {this.state.showLoginForm ? (
          <LoginForm {...this.loginFormProps}></LoginForm>
        ) : null}
        {this.state.showRegisterForm ? (
          <RegisterForm {...this.registerFormProps}></RegisterForm>
        ) : null}
        {this.state.showForgetPassForm ? (
          <ForgetPassForm {...this.forgetPassFormProps}></ForgetPassForm>
        ) : null}
      </section>
    );
  };
}

export default FirstPage;
