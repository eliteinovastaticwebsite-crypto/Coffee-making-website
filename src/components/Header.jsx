import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // ✅ Close menus when route changes
  useEffect(() => {
    setOpenMenu(null);
    setOpenSubMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenu(null);
      setOpenSubMenu(null);
      setMobileMenuOpen(false);
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

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // ✅ Close menu when clicking a link
  const handleLinkClick = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" onClick={(e) => e.stopPropagation()}>
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/logo.png" alt="Coffee Logo" />
        </Link>
      </div>

      {/* ✅ HAMBURGER ICON */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* ✅ NAVIGATION */}
      <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>

        <Link to="/" onClick={handleLinkClick}>Home</Link>

        {/* BUSINESS */}
        <div className="menu-item">
          <span>Business</span>
          <button className="arrow" onClick={(e) => toggleMain("business", e)}>▼</button>

          {openMenu === "business" && (
            <div className="dropdown">
              <Link to="/food-services" onClick={handleLinkClick}>Food Services</Link>
              <Link to="/coffee-solutions" onClick={handleLinkClick}>Office Coffee Solutions</Link>

              <div className="nested" onClick={(e) => toggleSub("consumer", e)}>
                Direct to Consumer ›
                {openSubMenu === "consumer" && (
                  <div className="nested-menu">
                    <Link to="/public-locations" onClick={handleLinkClick}>Public Locations</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* PRODUCTS */}
        <div className="menu-item">
          <Link to="/products" onClick={handleLinkClick}>Products</Link>
          <button className="arrow" onClick={(e) => toggleMain("products", e)}>▼</button>

          {openMenu === "products" && (
            <div className="dropdown">

              <div className="nested" onClick={(e) => toggleSub("machines", e)}>
                Coffee Machines ›
                {openSubMenu === "machines" && (
                  <div className="nested-menu">
                    <Link to="/automatic-machines" onClick={handleLinkClick}>Automatic Machines</Link>
                    <Link to="/semi-automatic-machines" onClick={handleLinkClick}>Semi Automatic Machines</Link>
                    <Link to="/home-machines" onClick={handleLinkClick}>Home Machines</Link>
                  </div>
                )}
              </div>

              <div className="nested" onClick={(e) => toggleSub("coffee", e)}>
                Coffee Products ›
                {openSubMenu === "coffee" && (
                  <div className="nested-menu">
                    <Link to="/coffee-beans" onClick={handleLinkClick}>Coffee Beans</Link>
                    <Link to="/coffee-powder" onClick={handleLinkClick}>Coffee Powder</Link>
                    <Link to="/pour-over-coffee" onClick={handleLinkClick}>Pour Over Coffee</Link>
                  </div>
                )}
              </div>

              <Link to="/coffee-accessories" onClick={handleLinkClick}>Coffee Accessories</Link>
            </div>
          )}
        </div>

        {/* MANUFACTURING */}
        <div className="menu-item">
          <Link to="/manufacturing" onClick={handleLinkClick}>Manufacturing</Link>
          <button className="arrow" onClick={(e) => toggleMain("manufacturing", e)}>▼</button>

          {openMenu === "manufacturing" && (
            <div className="dropdown">
              <Link to="/factory" onClick={handleLinkClick}>Our Factory</Link>
              <Link to="/research-development" onClick={handleLinkClick}>Research & Development</Link>
            </div>
          )}
        </div>

        {/* CONTACT */}
        <div className="menu-item">
          <Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
          <button className="arrow" onClick={(e) => toggleMain("contact-us", e)}>▼</button>

          {openMenu === "contact-us" && (
            <div className="dropdown">
              <Link to="/about" onClick={handleLinkClick}>About Us</Link>
              <Link to="/what-we-do" onClick={handleLinkClick}>What We Do</Link>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Header;
