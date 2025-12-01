import React, { useState } from 'react';
import './PublicLocation.css';

export default function PublicLocation() {
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

  const coffeeMachines = [
    { name: 'MICROBAR', id: 1, image: '/images/mach1.png' },
    { name: 'PRONTOBAR', id: 2, image: '/images/mach2.png' },
    { name: 'GEMINI FILTER', id: 3, image: '/images/mach4.png' },
    { name: 'MINI FRESH 2600', id: 4, image: '/images/mach8.png' }
  ];

  return (
    <div className="public-location-container">
      {/* Hero Section */}
      <section className="location-hero-section">
        <div className="location-hero-content">
          <h1>PUBLIC LOCATION</h1>
          <p>Where Freshness Meets Honesty in Every Sip</p>
        </div>
        <div className="location-hero-image">
          <img src="/images/public.jpg" alt="Coffee Machine" />
        </div>
      </section>

      {/* Established Section */}
      <section className="established-section">
        <div className="established-image">
          <img src="/images/latte_art.jpg" alt="Latte Art" />
        </div>
        <div className="established-content">
          <div className="brew-content">
          <h2>Established in 1999</h2>
          <h3>Guindy, Chennai, India</h3>
          <p>
             Every coffee location is unique and has its own set of demands. Our Fresh & Honest public location coffee 
              machines can be installed at public tea stalls or outdoor venues like beverage stalls at railway stations or 
              neighbourhood coffee shops. Especially since filter coffee is so popular in the south, filter coffee machines 
              are a common component to local shops in almost every locale in the south. Our assortment of machines boasts 
              and produces works for cafeterias, whether big or small. With easy maintenance and help running like extra 
              milk, cloud based technical support is in place to guarantee that the process is always smooth.
          </p>
        </div>
        </div>
      </section>

      {/* Explore Machines Section */}
      <section className="machines-section">
        <h2 className="machines-title">Explore Our Machines</h2>
        <div className="machines-grid">
          {coffeeMachines.map((machine) => (
            <div key={machine.id} className="machine-item">
              <div className="machine-image">
                <img src={machine.image} alt={machine.name} />
              </div>
              <h3>{machine.name}</h3>
            </div>
          ))}
        </div>
        <button className="explore-more-btn">Explore More</button>
      </section>

      {/* Contact Form Section */}
      <section className="location-contact-section">
        <div className="location-contact-container">
          <h2 className="location-contact-title">CONTACT US</h2>
          <div className="location-contact-form">
            <div className="location-form-group">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="location-form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="location-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="location-form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
            </div>
            <button onClick={handleSubmit} className="location-submit-btn">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}