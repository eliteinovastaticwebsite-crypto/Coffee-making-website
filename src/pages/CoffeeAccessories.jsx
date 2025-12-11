import React, { useState } from 'react';
import './CoffeeAccessories.css';

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
        <h1 className="page-title">COFFEE ACCESSORIES</h1>

        <div className="machines-grid">
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca1.png" alt="Espresso Machine" />
              <div className="machine-back">
            <p className="machine-desc">A beautifully crafted cup and saucer set designed for a perfect coffee experience.Its elegant floral design adds a touch of style and charm to every sip.Durable, lightweight, and ideal for both everyday use and special occasions.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">CUP & SAUCER</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca2.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A sturdy and stylish mug designed to enhance your daily coffee moments.Its smooth finish and comfortable handle ensure a perfect grip with every sip.Ideal for both hot and cold beverages, making it a versatile everyday essential.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">COFFEE MUG</h3>
          </div>
        
        <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca3.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A durable, spill-proof travel mug designed for enjoying your coffee on the go.Its insulated body keeps your drink hot for hours while maintaining comfort in hand.Perfect for commuters, travelers, and busy mornings when you need coffee that moves with you.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">TRAVEL COFFEE MUG</h3>
          </div>
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca4.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A sturdy and stylish mug designed to enhance your daily coffee moments.Its smooth finish and comfortable handle ensure a perfect grip with every sip.Ideal for both hot and cold beverages, making it a versatile everyday essential.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">COFFEE MUG</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca5.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A durable, spill-proof travel mug designed for enjoying your coffee on the go.Its insulated body keeps your drink hot for hours while maintaining comfort in hand.Perfect for commuters, travelers, and busy mornings when you need coffee that moves with you.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">TRAVEL COFFEE MUG</h3>
          </div>
          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca6.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A handcrafted wooden coffee mug that brings a natural, rustic charm to every sip.Its smooth polished finish enhances the warmth of your drink while offering a unique artisanal feel.Perfect for those who love eco-friendly, timeless drinkware inspired by nature.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>

            <h3 className="machine-name">WOODEN COFFEE MUG </h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca7.png" alt="Filter Coffee Machine" />
              <div className="machine-back">
            <p className="machine-desc">A premium coffee filter designed to extract pure flavor with smooth, sediment-free results.Its fine, durable mesh ensures perfect water flow for a rich and balanced brew every time.Ideal for pour-over, drip setups, and daily brewing rituals that demand clarity and quality.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
          </div>

          <div className="machine-item">
            <div className="machine-image-box">
              <img src="/images/ca8.png" alt="Coffee Vending Machine" />
              <div className="machine-back">
            <p className="machine-desc">A premium coffee filter designed to extract pure flavor with smooth, sediment-free results.Its fine, durable mesh ensures perfect water flow for a rich and balanced brew every time.Ideal for pour-over, drip setups, and daily brewing rituals that demand clarity and quality.</p>
            <button className="order-btn">Order Now</button>
            </div>
            </div>
            <h3 className="machine-name">FILTER COFFEE MACHINE</h3>
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