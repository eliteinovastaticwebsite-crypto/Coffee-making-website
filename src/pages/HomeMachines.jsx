import React, { useState } from 'react';
import './HomeMachines.css';

const CoffeeMachinesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="coffee-machines-page">
      
      {/* Automatic Machines Section */}
      <section className="automatic-machines-section">
        <h1 className="page-title">SEMI AUTOMATIC MACHINES</h1>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">ESPRESSO MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>
        
        <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm3.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm4.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm5.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">COFFEE VENDING MACHINE</h3>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="contact-section">

        <h2 className="contact-title">Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="form-input form-textarea"
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
      {/* Footer Section */}
<footer className="footer-section">
  <div className="footer-overlay">

    <div className="footer-left">
      <img src="/logo.png" alt="Coffee & Love" className="footer-logo" />
    </div>

    <div className="footer-links">

      <div className="footer-column">
        <h4>BUSINESS</h4>
        <p>Food Services</p>
        <p>Office Coffee Solution</p>
        <p>Public Location</p>
        <p>Direct to Consumer</p>
      </div>

      <div className="footer-column">
        <h4>PRODUCTS</h4>
        <p>Coffee Machines</p>
        <p>Powder to Cup - Filter</p>
        <p>Roast and Ground</p>
        <p>Decoction/Capsules</p>
      </div>

    </div>

    <div className="footer-right">
      <img src="/images/coffee cup.jpg" alt="Coffee Cup" className="footer-cup" />
    </div>

  </div>
</footer>


    </div>
  );
};

export default CoffeeMachinesPage;
