import React, { useState } from 'react';
import './AutomaticMachinesPage.css';

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
        <h1 className="page-title">AUTOMATIC MACHINES</h1>
        <p className="subtitle">Bean to Cup Machines</p>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/mach1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">ESPRESSO MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/mach2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/mach4.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">Premium bean-to-cup machine designed to deliver cafe-quality espresso every time.Perfect for homes, offices, and small cafes seeking consistent flavor and effortless brewing.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">COFFEE VENDING MACHINE</h3>
          </div>
        </div>
      </section>

      {/* Powder to Cup Machines Section */}
      <section className="powder-machines-section">
        <h2 className="section-title-large">Powder to Cup Machines</h2>

        <div className="powder-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/mach3.png" alt="Capsule Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Convenient powder-based coffee machines that deliver quick, consistent servings with minimal effort.Perfect for offices, small cafés, and homes needing fast, reliable, no-skill coffee preparation.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">CAPSULE COFFEE MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/mach5.png" alt="Drip Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Convenient powder-based coffee machines that deliver quick, consistent servings with minimal effort.Perfect for offices, small cafés, and homes needing fast, reliable, no-skill coffee preparation.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">DRIP FILTER COFFEE MACHINE</h3>
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