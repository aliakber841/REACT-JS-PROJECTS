import React from "react";
import seller1 from "/images/seller-1.png";
import seller2 from "/images/seller-2.png";
import seller3 from "/images/seller-3.png";
import seller4 from "/images/seller-4.png";


const BestSellers = () => {
  return (
    <div className="best-sellers-section">
      <h2 className="best-sellers-heading">Best Sellers</h2>
      <div className="best-sellers-container">
        <div className="best-seller-item">
          <img src={seller1} alt="Krunch Burger" />
          <h3>Krunch Burger</h3>
          <p className="price">AED 45</p>
        </div>

        <div className="best-seller-item">
          <img src={seller2} alt="Krunch Combo" />
          <h3>Krunch Combo</h3>
          <p className="price">AED 35</p>
        </div>

        <div className="best-seller-item">
          <img src={seller3} alt="Hot Wings Bucket" />
          <h3>Hot Wings Bucket</h3>
          <p className="price">AED 40</p>
        </div>

        <div className="best-seller-item">
          <img src={seller4} alt="Mighty Zinger" />
          <h3>Mighty Zinger</h3>
          <p className="price">AED 30</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
