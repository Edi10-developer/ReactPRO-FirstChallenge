import React from "react";
import "./styles.css";
import { Form, SocialComponent } from "./components/index";
import CoverImage from "./img/cover_image.png";

export default function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_form">
          <h1>Create Account</h1>
          <SocialComponent />
          <p className="registration_p">or use email for registration:</p>
          <Form />
        </div>
        <div className="cover_image">
          <img src={CoverImage} alt="Image default" />
        </div>
      </div>
    </div>
  );
}
