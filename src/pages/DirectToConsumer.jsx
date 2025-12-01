import React, { useState } from 'react';
import './DirectToConsumer.css';

export default function DirectToConsumer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const coffeeBeansProducts = [
    { name: 'GOLD', id: 1, image: '/images/b1.png' },
    { name: 'HOUSE BLEND', id: 2, image: '/images/b2.png' },
    { name: 'CAFE SUPREMO', id: 3, image: '/images/b3.png' }
  ];

  const coffeePowderProducts = [
    { name: 'AWAKE 70:30', id: 1, image: '/images/p1.png' },
    { name: 'AWAKE 80:20', id: 2, image: '/images/p2.png' },
    { name: 'AWAKE 60:40', id: 3, image: '/images/p3.png' }
  ];

  const coffeeMachines = [
    { name: 'MICROBAR', id: 1, image: '/images/mach1.png' },
    { name: 'PRONTOBAR', id: 2, image: '/images/mach2.png' },
    { name: 'STELLARA', id: 3, image: '/images/mach8.png' }
  ];

  return (
    <div className="d2c-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>DIRECT TO CONSUMER</h1><br />
          <p>Coffee Excellence at Your Doorstep</p>
        </div>
        <div className="hero-image">
          <img src="/images/bubble_coffee.jpg" alt="Bubble Tea" />
        </div>
      </section>

      {/* Brew Beautiful Coffee Section */}
      <section className="brew-section">
        <div className="brew-image">
          <img src="/images/brew_coffee.jpg" alt="Coffee Brewing" />
        </div>
        <div className="brew-content">
          <h2>BREW BEAUTIFUL COFFEE</h2>
          <p>
            With growing numbers of people in India adopting the use of home coffee machines 
            that require fresh coffee beans for the brewing process, Fresh & Honest has lined up 
            several do-it-yourself coffee machines that are easy to use and brew beautiful coffee. 
            We have varieties of coffee beans for the choosing, so you can try out a whole host of 
            flavours to satiate your palate and feel that you have the sum total of coffee at your 
            fingertips. We've even got coffee powders, both instant and filter, for those in need 
            of a quick fix at home and don't always have the time to painstakingly brew a hot cup 
            of coffee.
          </p>
        </div>
      </section>

      {/* Coffee Beans Section */}
      <section className="products-section">
        <h2 className="section-title">COFFEE BEANS</h2>
        <div className="products-grid">
          {coffeeBeansProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="section-title">COFFEE POWDER</h2>
        <div className="products-grid">
          {coffeePowderProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="section-title">COFFEE MACHINES</h2>
        <div className="products-grid">
          {coffeeMachines.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
        <button className="explore-btn">Explore More</button>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">CONTACT US</h2>
          <div className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
            </div>
            <button onClick={handleSubmit} className="submit-btn">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}