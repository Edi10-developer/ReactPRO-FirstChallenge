import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialComponent = () => {
  const socialLinks = [
    "https://google.com/",
    "https://facebook.com/",
    "https://twitter.com/",
    "https://linkedin.com/"
  ];

  const styledIcon = {
    border: "1px solid #16242B",
    borderRadius: "50%",
    margin: "10px",
    height: "30px",
    width: "30px",
    padding: "3px"
  };

  return (
    <>
      {socialLinks.map((link) => (
        <SocialIcon
          url={link}
          className="social_icon"
          bgColor="white"
          fgColor="#16242B"
          style={styledIcon}
        />
      ))}
    </>
  );
};

export default SocialComponent;
