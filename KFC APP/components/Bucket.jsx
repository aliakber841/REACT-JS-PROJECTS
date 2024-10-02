import React, { useState } from "react";
import footer4 from "/images/footer-4.png";
import { Link } from "react-router-dom";

const Bucket = ({ items }) => {
  const [specialInstructions, setSpecialInstructions] = useState("");

  
  const subTotal = items.reduce((total, item) => total + item.price, 0);
  const deliveryFee = 0; 
  const gst = subTotal * 0.17; 

  return (
    <div className="bucket-container">
      
      <div className="cart">
        <div className="cart-header">
          <button className="back-button">⟵</button>
          <h2>Items From Your Cart</h2>
        </div>

      
        {items.length === 0 ? (
          <div className="empty-cart">
            <img src={footer4} alt="Empty Bucket" className="bucket-image" />
            <p>You haven't added any items to the bucket yet</p>
          </div>
        ) : (
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.deal}</span>
                <span>Aed {item.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    
      <div className="order-details">
        <h3>Order Details</h3>
        <textarea
          placeholder="Add Cooking/Delivery Instructions (Optional)"
          className="special-instructions"
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        ></textarea>
        <div className="order-summary">
          <div className="order-item">
            <span>Sub Total :</span>
            <span>Aed {subTotal}</span>
          </div>
          <div className="order-item">
            <span>Delivery Fee :</span>
            <span>Aed {deliveryFee}</span>
          </div>
          <div className="order-item">
            <span>GST (17 %):</span>
            <span>Aed {gst.toFixed(2)}</span>
          </div>
          <div className="order-item total">
            <span>Total :</span>
            <span>Aed {(subTotal + deliveryFee + gst).toFixed(2)}</span>
          </div>
        </div>
        <div className="checkout-bar">
          <span>
            {items.length} Item(s) | Aed{" "}
            {(subTotal + gst + deliveryFee).toFixed(2)}
          </span>
          <Link to="#" className="checkout-button">
            Checkout ➔
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
