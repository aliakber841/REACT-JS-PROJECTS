import React from "react";
import burger1 from "/images/burger-1.png";
import burger2 from "/images/burger-2.png";
import burger3 from "/images/burger-3.png";
import burger4 from "/images/burger-4.png";
import burger5 from "/images/burger-5.png";
import xtreme from "/images/xtreme.jpg";
const Menu = () => {
  const menuItems = [
    { title: "Everyday Value", imageUrl: burger1  },
    { title: "Ala-Carte-&-Combos", imageUrl:  burger2  },
    { title: "Promotion", imageUrl:  burger3 },
    { title: "Signature Boxes", imageUrl: burger4  },
    { title: "Sharing", imageUrl: burger5  },
  ];

  return (
    <>
      <img className="landing-imgs" src={xtreme} />
      <button className="reorder">REORDER</button>
      <div className="menu-section">
        <h2 className="menu-title">Explore Menu</h2>
        <div className="menu-slider">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="menu-image"
                />
              </div>
              <p className="menu-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
