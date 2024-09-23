import React from "react";
import footer1 from "/images/footer-1.png";
import footer2 from "/images/footer-2.png";
import footer3 from "/images/footer-3.jpg";
import footer4 from "/images/footer-4.png";

const ImageCards = () => {
  return (
    <div className="image-cards-section">
      <div className="cards-container">
       
          <img className="img1" src={footer1} alt="Order Online" />
          <img className="img2" src={footer2} alt="Order Online" />
          <img className='img3' src={footer3} alt="Order Online" />
       

        <div className="card explore-menu-card">
          <img src={footer4} />
          <h3>Explore Menu</h3>
          <p>Explore our menu and add items to your cart.</p>
          <button className="explore-menu-btn">EXPLORE MENU</button>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
