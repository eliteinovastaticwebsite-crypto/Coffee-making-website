import React, { useState } from 'react';
import './FactoryPage.css';

const FactoryPage = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', budget: '', location: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="factory-page">
      
      {/* Hero Banner */}
      <section className="factory-hero-banner">
        <div className="factory-hero-content">
          <div className="factory-hero-text">
            <h1>OUR FACTORY</h1>
            <p>Our Factory's Flavorful Secret:<br />Coffee & Love</p>
          </div>
          <div className="factory-hero-image">
            <img src="/images/team image.jpg" alt="Factory Team" />
          </div>
        </div>
      </section>

      {/* Factory Description */}
      <section className="factory-description">
        <div className="factory-desc-container">
          <p className="factory-main-text">
            Our Sri City coffee plant at Tada, Andhra Pradesh is where our primary work of preparing our beans takes place. It's a fully automated manufacturing unit covering an area of 40,000 sq. mts. It boasts a German technology roasting, grinding and packaging line with a nitrogen flush system...
          </p>
          
          <div className="factory-features">
            <h3>More About Our Plant</h3>
            <ul>
              <li>State-of-the-art coffee processing facility</li>
              <li>Hygienic conditions maintained with a careful eye</li>
              <li>Ethical coffee manufacturing plant following all advisable guidelines</li>
              <li>Environmental sustainability maintained at all times</li>
              <li>Highly-skilled employees on duty</li>
              <li>Latest processing and packaging equipment</li>
              <li>Fully automated</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Factory Glimpses */}
      <section className="factory-glimpses">
        <h2>Factory Glimpses</h2>
        <div className="glimpses-grid">
          <img src="/images/fact1.jpg" alt="Factory Interior 1" />
          <img src="/images/fact2.jpg" alt="Factory Interior 2" />
          <img src="/images/fact3.jpg" alt="Factory Interior 3" />
          <img src="/images/fact4.jpg" alt="Factory Interior 4" />
          <img src="/images/fact5.jpg" alt="Factory Exterior 1" />
          <img src="/images/fact6.jpg" alt="Factory Exterior 2" />
          <img src="/images/fact7.jpg" alt="Factory Equipment" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="factory-contact-section">
        <h2>Contact Us</h2>
        <div className="factory-contact-form">
          <input type="text" name="name" placeholder="Name*" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone*" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email*" onChange={handleChange} />
          <input type="text" name="budget" placeholder="Budget*" onChange={handleChange} />
          <input type="text" name="location" placeholder="Location*" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange} rows="4"></textarea>
          <button onClick={handleSubmit} className="factory-submit-btn">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default FactoryPage;