import React from "react";
import "../style/Select.css";
const Select = props => {
  return (
    <select
      name={props.name}
      value={props.value}
      className={props.classname}
      onChange={props.onClick}
    >
      <option value="">{props.placeholder}</option>
      {props.options.map(option => {
        return (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
