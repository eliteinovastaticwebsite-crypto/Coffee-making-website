import React, { useState } from 'react';
import './PourOverCoffee.css';

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
        <h1 className="page-title">POUR OVER COFFEE</h1>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/po1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">Pour-over coffee powder is a medium-ground coffee made for manual brewers like V60 or Kalita. It gives a clean, smooth, and aromatic cup by allowing water to flow evenly through the grounds. Perfect for highlighting natural flavors in the beans.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">LIGHT ROAST COFFEE POWDER</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/po2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Pour-over coffee powder is a medium-ground coffee made for manual brewers like V60 or Kalita. It gives a clean, smooth, and aromatic cup by allowing water to flow evenly through the grounds. Perfect for highlighting natural flavors in the beans.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">MEDIUM ROAST COFFEE POWDER</h3>
          </div>
        
        <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/po3.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Pour-over coffee powder is a medium-ground coffee made for manual brewers like V60 or Kalita. It gives a clean, smooth, and aromatic cup by allowing water to flow evenly through the grounds. Perfect for highlighting natural flavors in the beans.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">MEDIUM DARK ROAST COFFEE POWDER</h3>
          </div>
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/po4.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Pour-over coffee powder is a medium-ground coffee made for manual brewers like V60 or Kalita. It gives a clean, smooth, and aromatic cup by allowing water to flow evenly through the grounds. Perfect for highlighting natural flavors in the beans.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">SINGLE ORIGIN COFFEE POWDER</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/po5.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">Pour-over coffee powder is a medium-ground coffee made for manual brewers like V60 or Kalita. It gives a clean, smooth, and aromatic cup by allowing water to flow evenly through the grounds. Perfect for highlighting natural flavors in the beans.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FRESHLY GROUND COFFEE POWDER</h3>
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
    </div>
  );
};

export default CoffeeMachinesPage;