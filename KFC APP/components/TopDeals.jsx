import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast
import deal1 from "/images/deal-1.png";
import deal2 from "/images/deal-2.png";
import deal3 from "/images/deal-3.png";
import deal4 from "/images/deal-4.png";
import burger1 from "/images/burger-1.png";
import burger2 from "/images/burger-2.png";
import burger3 from "/images/burger-3.png";
import burger4 from "/images/burger-4.png";
import seller1 from "/images/seller-1.png";
import seller2 from "/images/seller-2.png";
import seller3 from "/images/seller-3.png";
import seller4 from "/images/seller-4.png";

// Deals array as earlier
const deals = [
  {
    id: 1,
    name: "Twister Combo",
    description: "Twister + 1 Regular fries + 1 Regular drink",
    price: 30,
    image: deal1,
  },
  {
    id: 2,
    name: "Zinger Stacker Combo",
    description: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
    price: 34,
    image: deal2,
  },
  {
    id: 3,
    name: "Crispy Duo Box",
    description: "5 pcs Hot & Crispy Chicken + 1 Large fries + 2 drinks",
    price: 43,
    image: deal3,
  },
  {
    id: 4,
    name: "Family Festival 3",
    description: "4 Zinger burgers + 4 Regular fries + 4 drinks",
    price: 45,
    image: deal4,
  },
  {
    id: 5,
    name: "Everyday Value",
    description: "Zinger burgers + Regular fries + drinks",
    price: 40,
    image: burger1,
  },
  {
    id: 6,
    name: "Ala-Carte-&-Combos",
    description: "4 Regular fries + 4 drinks + 5 pcs Hot & Crispy Chicken",
    price: 37,
    image: burger2,
  },
  {
    id: 7,
    name: "Promotion",
    description: "4 Zinger burgers + 1 Zinger Stacker",
    price: 50,
    image: burger3,
  },
  {
    id: 8,
    name: "Signature Boxes",
    description: "2 Zinger burgers + 2 Regular fries + 2 drinks",
    price: 49,
    image: burger4,
  },
  {
    id: 9,
    name: "Krunch Combo",
    description: "2 Zinger burgers + 2 drinks + 2 large fries",
    price: 43,
    image: seller2,
  },
  {
    id: 10,
    name: "Krunch Burger",
    description: "Krunch Zinger Burger + 1 Large fries",
    price: 30,
    image: seller1,
  },
  {
    id: 11,
    name: "Hot Wings Bucket",
    description: "8 pcs Hot & Crispy Chicken + 1 Regular fries + 1 drink",
    price: 50,
    image: seller3,
  },
  {
    id: 12,
    name: "Mighty Zinger",
    description: "Mighty Zinger + 1 Regular fries + 1 drink",
    price: 40,
    image: seller4,
  },
];

const TopDeals = ({ addToBucket }) => {
  // Function to handle adding a deal to the bucket and showing a toast
  const handleAddToBucket = (deal) => {
    const item = { deal: deal.name, price: deal.price, quantity: 1 };
    addToBucket(item); // Add to the parent bucket
    toast.success(`${deal.name} has been added to the bucket!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="top-deals-section">
      <h2 className="top-deals-heading">Top Deals</h2>
      <div className="top-deals-container">
        {deals.map((deal) => (
          <div key={deal.id} className="top-deal-item">
            <img src={deal.image} alt={deal.name} />
            <h3>{deal.name}</h3>
            <p>{deal.description}</p>
            <p className="price">AED {deal.price}</p>
            <button
              className="add-to-bucket"
              onClick={() => handleAddToBucket(deal)}
            >
              + ADD TO BUCKET
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
