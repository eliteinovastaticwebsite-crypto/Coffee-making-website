import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenu(null);
      setOpenSubMenu(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMain = (menu, e) => {
    e.stopPropagation();
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubMenu(null);
  };

  const toggleSub = (sub, e) => {
    e.stopPropagation();
    setOpenSubMenu(openSubMenu === sub ? null : sub);
  };

  return (
    <header className="header" onClick={(e) => e.stopPropagation()}>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Coffee Logo" />
        </Link>
      </div>

      <nav className="nav">

        {/* HOME */}
        <div className="menu-item">
          <Link to="/">Home</Link>
          <button className="arrow" onClick={(e) => toggleMain("home", e)}>▼</button>

          {openMenu === "home" && (
            <div className="dropdown">
              <p>About Us</p>
              <p>What We Do</p>
            </div>
          )}
        </div>

        {/* BUSINESS */}
        <div className="menu-item">
          <span>Business</span>
          <button className="arrow" onClick={(e) => toggleMain("business", e)}>▼</button>

          {openMenu === "business" && (
            <div className="dropdown">
              <p>Food Services</p>
              <p>Office Coffee Solutions</p>

              <div className="nested" onClick={(e) => toggleSub("consumer", e)}>
                Direct to Consumer ›
                {openSubMenu === "consumer" && (
                  <div className="nested-menu">
                    <p>Public Locations</p>
                    <p>E-Commerce</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* PRODUCTS */}
        <div className="menu-item">
          <Link to="/products">Products</Link>
          <button className="arrow" onClick={(e) => toggleMain("products", e)}>▼</button>

          {openMenu === "products" && (
            <div className="dropdown">

              {/* Coffee Machines */}
              <div className="nested" onClick={(e) => toggleSub("machines", e)}>
                Coffee Machines ›
                {openSubMenu === "machines" && (
                  <div className="nested-menu">
                    <Link to="/automatic-machines">Automatic Machines</Link>
                    <Link to="/semi-automatic-machines">Semi Automatic Machines</Link>
                    <Link to="/home-machines">Home Machines</Link>
                  </div>
                )}
              </div>

              {/* Coffee Products */}
              <div className="nested" onClick={(e) => toggleSub("coffee", e)}>
                Coffee Products ›
                {openSubMenu === "coffee" && (
                  <div className="nested-menu">
                    <Link to="/coffee-beans">Coffee Beans</Link>
                    <Link to="/coffee-powder">Coffee Powder</Link>
                    <Link to="/pour-over">Pour Over Coffee</Link>
                  </div>
                )}
              </div>

              <p>Coffee Accessories</p>
            </div>
          )}
        </div>

        {/* MANUFACTURING */}
        <div className="menu-item">
          <Link to="/manufacturing">Manufacturing</Link>
          <button className="arrow" onClick={(e) => toggleMain("manufacturing", e)}>▼</button>

          {openMenu === "manufacturing" && (
            <div className="dropdown">
              <Link to="/factory">Our Factory</Link>
              <p>Research & Development</p>
            </div>
          )}
        </div>

        <Link to="/contact-us" className="menu-item">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;








