import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BestSellers from "./components/BestSellers";
import TopDeals from "./components/TopDeals";
import ImageCards from "./components/ImageCards";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Bucket from "./components/Bucket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const App = () => {
  const [bucketItems, setBucketItems] = useState([]);

  const addToBucket = (newItem) => {
    setBucketItems((prevItems) => {
      // Check if the item already exists in the bucket, increase its quantity
      const existingItem = prevItems.find((item) => item.deal === newItem.deal);
      if (existingItem) {
        return prevItems.map((item) =>
          item.deal === newItem.deal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the new item to the bucket
        return [...prevItems, newItem];
      }
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Menu />
              <TopDeals addToBucket={addToBucket} />
              <ImageCards />
              <Footer />
            </>
          }
        />
        {/* Bucket Route */}
        <Route path="/bucket" element={<Bucket items={bucketItems} />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
