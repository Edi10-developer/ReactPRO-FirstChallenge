import React from "react";
import { Input, Button } from "./index";

const Form = () => {
  return (
    <form className="form">
      <Input
        type="text"
        name="Name"
        placeholder="Name"
        className="form_control"
      />
      <Input
        type="email"
        name="Name"
        placeholder="Email"
        className="form_control"
      />
      <Input
        type="password"
        name="Name"
        placeholder="Password"
        className="form_control"
      />
      <p>
        <Input type="checkbox" checked className="form_control_checkbox" />
        <span>
          I agree to the <a href="#"> Terms </a>
          and <a href="#">Privacy Policy.</a>
        </span>
      </p>
      <p>
        <Button placeholder="Sign Up" className="button button__signup" />
        <Button placeholder="Sign In" className="button button__signin" />
      </p>
    </form>
  );
};

export default Form;
