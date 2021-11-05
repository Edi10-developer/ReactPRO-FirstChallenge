import react from "react";

const Input = ({ name, type, placeholder }) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    className="form-control"
  />
);

export default Input;
