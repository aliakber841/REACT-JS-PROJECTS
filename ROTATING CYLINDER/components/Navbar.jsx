import React from "react";
import logo from '/images/logo.jpg';

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <img
            className="nav-img"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="nav-right">
          <a href="#about-text">About Me</a>
          <a href="#resume-download">Resume</a>
          <a href="#contact-text">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
