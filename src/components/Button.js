import React from "react";
const Button = ({ text, onClick, type,id }) => (
  <button type={type} onClick={onClick} id={id}>
    {text}
  </button>
);
export default Button;
