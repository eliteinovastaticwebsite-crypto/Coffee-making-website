import React, { useState } from 'react';
import './ResearchDevelopmentPage.css';

const ResearchDevelopmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    location: '',
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
    console.log('Form submitted:', formData);
    alert("Form submitted successfully!");

    setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
  };

  return (
    <div className="rd-page">
      
      {/* Hero Banner */}
      <section className="rd-hero-banner">
        <div className="rd-hero-content">
          <div className="rd-hero-text">
            <h1>RESEARCH & DEVELOPMENT</h1>
            <p>Crafting the Perfect Cup, Through<br />Research and Development</p>
          </div>
          <div className="rd-hero-image">
            <img src="/images/coffee research.jpg" alt="Coffee Tasting" />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="rd-content-section">
        
        {/* Innovating the Future of Coffee */}
        <div className="rd-section">
          <h2>Innovating the Future of Coffee</h2>
          <h3>Coffee & Love Coffee's Research and Development</h3>
          <p>
            At Coffee & love, we believe in continuously pushing the boundaries of what's possible in the world of coffee. Our Research and Development (R&D) division is at the forefront of innovation, dedicated to enhancing the coffee experience and ensuring that every cup of coffee we serve is truly exceptional.
          </p>
        </div>

        {/* Pioneering the Coffee Industry */}
        <div className="rd-section">
          <h2>Pioneering the Coffee Industry</h2>
          <p>
            Our R&D team is a group of dedicated experts who are passionate about coffee and its potential. We are committed to pioneering new techniques, flavors, and sustainable practices that elevate the quality of coffee. From sourcing the finest coffee beans to developing cutting-edge brewing methods, we are committed to delivering a coffee experience that delights the senses.
          </p>
        </div>

        {/* Sustainability and Quality */}
        <div className="rd-section">
          <h2>Sustainability and Quality</h2>
          <p>
            Our R&D efforts extend beyond just flavor and technique. We are deeply committed to sustainability, working to minimize our environmental footprint while maintaining the highest quality standards. By exploring eco-friendly packaging, reducing waste, and supporting coffee communities, we're contributing to a better future for coffee lovers and the planet.
          </p>
        </div>

        {/* Collaborative Innovation */}
        <div className="rd-section">
          <h2>Collaborative Innovation</h2>
          <p>
            We believe that the best innovations come from collaboration. That's why we partner with coffee experts, farmers, and scientists to drive our research and development. By working together, we can unlock new flavors, better brewing methods, and sustainable practices that benefit everyone in the coffee supply chain.
          </p>
        </div>

        {/* Experience the Future of Coffee */}
        <div className="rd-section">
          <h2>Experience the Future of Coffee</h2>
          <p>
            Join us on this exciting journey of innovation and discovery in the world of coffee. As we continue to explore and develop new horizons, you can expect more delicious and sustainable coffee experiences from Coffee & Love's Coffee. Together, we're shaping the future of coffee, one cup at a time.
          </p>
        </div>

      </section>

      {/* Contact Form Section */}
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

export default ResearchDevelopmentPage;