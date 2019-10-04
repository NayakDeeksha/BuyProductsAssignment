import React from "react";
import "../style/Button.css";
const Button = ({ text, onClick, type, classname }) => (
  <button type={type} onClick={onClick} className={classname}>
    {text}
  </button>
);
export default Button;
