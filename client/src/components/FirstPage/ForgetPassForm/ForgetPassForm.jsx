import React, { Component } from "react";
import ForgetPassFormView from "./ForgetPassFormView";

export default class ForgetPassForm extends Component {
  viewProps = {
    changeForm: this.props.changeForm
  };
  render() {
    return <ForgetPassFormView {...this.viewProps}></ForgetPassFormView>;
  }
}
