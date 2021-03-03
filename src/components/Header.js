import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Hi, ", "I'm Nacho, Frontend Developer."]}
          typeSpeed={50}
          backSpeed={50}
        />

        <a href="#" className="btn-contact push">Contact me</a>
      </div>
    </div>
  );
};

export default Header;
