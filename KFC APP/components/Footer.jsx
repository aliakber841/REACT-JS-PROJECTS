import React from "react";
import appstore from '/images/appstore.png';
import google from "/images/google.png";
import facebook from "/images/Facebook.png";
import instagram from "/images/Instagram.png";
import logo from "/images/download.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img className="logo" src={logo} alt="KFC Logo" />
        <img className="fb" src={facebook} alt="" />
        <img className="insta" src={instagram} alt="" />
      </div>
      <div className="footer-container">
        <div class="footer-mid-div">
          <h3> About Us</h3>
          <h3> Mitao Bhook</h3>
          <h3> Mitao Bhook - Scholarship</h3>
          <h3> Privacy Policy</h3>
          <h3> Careers</h3>
        </div>

        <div class="footer-mid-div">
          <h3> Contact Us</h3>
          <h3> Store Locator</h3>
          <h3> Track Order</h3>
          <h3> Privacy Policy</h3>
          <h3> Terms & Conditions</h3>
        </div>

        <div className="footer-apps">
          <a href="#">
            <img src={appstore} alt="App Store" />
          </a>
          <a href="#">
            <img src={google} alt="Google Play" />
          </a>
        </div>
      </div>

      <div className="footer-credits">
        <p>2024 KFC. All rights reserved</p>
        <p>Powered by Simplex Technology Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
