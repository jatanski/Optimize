import React from "react";
import { MDBInput } from "mdbreact";

const RegisterFormTextInput = ({ onChange, id, label, icon, type }) => {
  return (
    <MDBInput
      label={label}
      icon={icon}
      group
      type={type}
      validate
      error="wrong"
      success="right"
      onChange={onChange}
      id={id}
    />
  );
};

export default RegisterFormTextInput;
