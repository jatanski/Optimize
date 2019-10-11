import React from "react";

const RadioInput = ({ id, isAdmin, labelText }) => {
  return (
    <div onClick={isAdmin} className="custom-control custom-radio">
      <input
        type="radio"
        className="custom-control-input"
        id={id}
        name="defaultExampleRadios"
      ></input>
      <label
        className="custom-control-label radio-orange input-text-grey"
        htmlFor={id}
      >
        {labelText}
      </label>
    </div>
  );
};

export default RadioInput;
