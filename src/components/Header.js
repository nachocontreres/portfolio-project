import React from "react";
import Typed from "react-typed";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info contact-button">
        <Typed
          className="typed-text"
          strings={["Hi, ", "I'm Nacho, Frontend Developer."]}
          typeSpeed={50}
          backSpeed={50}
        />

        <Button className="push" type="submit">
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Header;
