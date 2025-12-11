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
        <h1 className="page-title">HOME MACHINES</h1>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">Home coffee machines make it easy to brew cafe-style drinks right in your kitchen, offering convenience for busy mornings and relaxed evenings. They come in different types—from drip makers to espresso and capsule machines—allowing users to choose the flavour, strength, and style they prefer.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">ESPRESSO MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Home coffee machines make it easy to brew cafe-style drinks right in your kitchen, offering convenience for busy mornings and relaxed evenings. They come in different types—from drip makers to espresso and capsule machines—allowing users to choose the flavour, strength, and style they prefer.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>
        
        <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm3.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Home coffee machines make it easy to brew cafe-style drinks right in your kitchen, offering convenience for busy mornings and relaxed evenings. They come in different types—from drip makers to espresso and capsule machines—allowing users to choose the flavour, strength, and style they prefer.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm4.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Home coffee machines make it easy to brew cafe-style drinks right in your kitchen, offering convenience for busy mornings and relaxed evenings. They come in different types—from drip makers to espresso and capsule machines—allowing users to choose the flavour, strength, and style they prefer.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/hm5.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">Home coffee machines make it easy to brew cafe-style drinks right in your kitchen, offering convenience for busy mornings and relaxed evenings. They come in different types—from drip makers to espresso and capsule machines—allowing users to choose the flavour, strength, and style they prefer.</p>
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
    </div>
  );
};

export default CoffeeMachinesPage;
