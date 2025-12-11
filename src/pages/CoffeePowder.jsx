import React, { useState } from 'react';
import './CoffeePowder.css';

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
        <h1 className="page-title">COFFEE POWDER</h1>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/p1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">Coffee powder is made from roasted, ground coffee beans that offer a strong aroma and rich flavour. It’s easy to use and perfect for quick brewing, giving you a fresh and satisfying cup anytime. It delivers consistent taste with every cup.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">CAPPUCCINO</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/p2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Coffee powder is made from roasted, ground coffee beans that offer a strong aroma and rich flavour. It’s easy to use and perfect for quick brewing, giving you a fresh and satisfying cup anytime. It delivers consistent taste with every cup.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">ESPRESSO</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/p3.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Coffee powder is made from roasted, ground coffee beans that offer a strong aroma and rich flavour. It’s easy to use and perfect for quick brewing, giving you a fresh and satisfying cup anytime. It delivers consistent taste with every cup.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">BLACK COFFEE</h3>
          </div>
        
        
        <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/p4.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">Coffee powder is made from roasted, ground coffee beans that offer a strong aroma and rich flavour. It’s easy to use and perfect for quick brewing, giving you a fresh and satisfying cup anytime. It delivers consistent taste with every cup.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">AMERICANO</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/p5.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">Coffee powder is made from roasted, ground coffee beans that offer a strong aroma and rich flavour. It’s easy to use and perfect for quick brewing, giving you a fresh and satisfying cup anytime. It delivers consistent taste with every cup.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">MOCHA</h3>
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