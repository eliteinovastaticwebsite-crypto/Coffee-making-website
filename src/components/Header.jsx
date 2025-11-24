import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ Added
import "./Header.css";

const Header = () => {
  const [mainMenu, setMainMenu] = useState(null);
  const [subMenu, setSubMenu] = useState(null);

  const toggleMain = (menu) => {
    setMainMenu(mainMenu === menu ? null : menu);
    setSubMenu(null);
  };

  const toggleSub = (menu) => {
    setSubMenu(subMenu === menu ? null : menu);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">                     {/* ✅ Added Link */}
          <img src="/logo.png" alt="Coffee Logo" />
        </Link>
      </div>

      <nav className="nav">

        {/* HOME */}
        <div className="menu-item" onClick={() => toggleMain("home")}>
          <Link to="/">Home ▼</Link>       {/* ✅ Added Link */}
          {mainMenu === "home" && (
            <div className="dropdown">
              <p>About Us</p>
              <p>What We Do</p>
            </div>
          )}
        </div>

        {/* BUSINESS */}
        <div className="menu-item" onClick={() => toggleMain("business")}>
          Business ▼
          {mainMenu === "business" && (
            <div className="dropdown">
              <p>Food Services</p>
              <p>Office Coffee Solutions</p>

              <div
                className="nested"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSub("consumer");
                }}
              >
                Direct to Consumer ›
                {subMenu === "consumer" && (
                  <div className="dropdown nested-menu">
                    <p>Public Locations</p>
                    <p>E-Commerce</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* PRODUCTS */}
        <div className="menu-item" onClick={() => toggleMain("products")}>
          <Link to="/products">Products ▼</Link>   {/* ✅ Added Link */}
          {mainMenu === "products" && (
            <div className="dropdown">

              {/* Coffee Machines */}
              <div
                className="nested"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSub("machines");
                }}
              >
                Coffee Machines ›
                {subMenu === "machines" && (
                  <div className="dropdown nested-menu">
                    <p>Automatic Coffee Machines</p>
                    <p>Semi-Automatic Coffee Machines</p>
                    <p>Home Machines</p>
                  </div>
                )}
              </div>

              {/* Coffee Products */}
              <div
                className="nested"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSub("coffee");
                }}
              >
                Coffee Products ›
                {subMenu === "coffee" && (
                  <div className="dropdown nested-menu">
                    <p>Coffee Beans</p>
                    <p>Coffee Powder</p>
                    <p>Pour Over Coffee</p>
                  </div>
                )}
              </div>

              <p>Coffee Accessories</p>
            </div>
          )}
        </div>

        {/* TRAINING */}
        <div className="menu-item" onClick={() => toggleMain("training")}>
          Training Centres ▼
          {mainMenu === "training" && (
            <div className="dropdown">
              <p>Coffee Terms</p>
              <p>Gallery</p>
            </div>
          )}
        </div>

        {/* MANUFACTURING */}
        <div className="menu-item" onClick={() => toggleMain("manufacturing")}>
          Manufacturing ▼
          {mainMenu === "manufacturing" && (
            <div className="dropdown">
              <p>Our Factory</p>
              <p>Research & Development</p>
            </div>
          )}
        </div>

        {/* CONTACT */}
        <Link to="/contact" className="menu-item">Contact Us</Link>  
      </nav>
    </header>
  );
};

export default Header;




