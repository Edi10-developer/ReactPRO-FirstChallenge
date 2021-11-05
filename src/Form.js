import React from "react";
import Input from "./Input";
import Button from "./Button";
const Form = () => {
  return (
    <form className="form">
      <Input type="text" name="Name" placeholder="Name" />
      <Input type="email" name="Name" placeholder="Email" />
      <Input type="password" name="Name" placeholder="Password" />
      <p>
        <Input type="checkbox" name="Name" value="checked" />
        <span>
          I agree to the <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy.</a>
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
