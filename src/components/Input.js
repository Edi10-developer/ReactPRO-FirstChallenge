import React from "react";

const Input = ({ name, type, placeholder, className }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;
