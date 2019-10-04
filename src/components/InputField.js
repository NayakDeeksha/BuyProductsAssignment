import React from "react";
import "../style/InputField.css";
const Input = props => {
  return (
    <input
      value={props.value}
      className={props.className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
