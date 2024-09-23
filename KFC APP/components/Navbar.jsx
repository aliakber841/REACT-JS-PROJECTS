import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import logo from '/images/download.png';
import delivery from "/images/delivery.png";
import pickup from "/images/pickup.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <VscThreeBars className="lines-logo" />
            <a href="/">
              <img className="logo" src={logo} alt="KFC Logo" />
            </a>
          </div>
        </div>

        <div className="btn-container">
          <button className="navbar-btn delivery">
            <img className="delivery-img" src={delivery} />
            <span> DELIVERY</span>
          </button>
          <button className="navbar-btn pickup">
            <img className="delivery-img" src={pickup} />
            PICKUP
          </button>
        </div>

        <div className="navbar-right">
          <a href="/" className="navbar-login">
            LOGIN
          </a>

          <Link to="/bucket" className="navbar-login">
            BUCKET
          </Link>
          {/* <div className="navbar-cart">
            <img src="cart-icon-url" alt="Cart Icon" />
          </div> */}
        </div>
      </nav>

     
    </>
  );
};

export default Navbar