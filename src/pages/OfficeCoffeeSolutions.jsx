import React, { useState } from "react";
import "./OfficeCoffeeSolutions.css";

const OfficeCoffeeSolutions = () => {

  /* -------------------- FORM STATES -------------------- */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  /* -------------------- INPUT CHANGE HANDLER -------------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* -------------------- FORM SUBMIT -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="office-container">

      {/* -------------------- HERO BANNER -------------------- */}
      <section className="hero-section">
        <div className="hero-text-box">
          <h1>OFFICE COFFEE SOLUTIONS</h1>
          <p>Bringing Office Breaks to Life</p>
        </div>
        <img
          src="/images/office.jpg"
          className="hero-image"
          alt="Office Coffee"
        />
      </section>

      {/* -------------------- ESTABLISHED SECTION -------------------- */}
      <section className="established-section">
        <div className="established-text">
          <h2>Established in 2000</h2>
        </div>

        <div className="established-content">
          <img
            src="/images/writing.jpg"
            className="side-img"
            alt="Coffee Writing"
          />

          <div className="established-right">
            <img
              src="/images/cup.jpg"
              className="cup-img"
              alt="Fresh Honest Cup"
            />

            <p className="established-para">
              Every office, irrespective of its size, requires coffee solutions
              to keep its crew members running through the long hours of the
              day and sometimes even the night. Office coffee solutions include
              coffee vending machines that can instantly prepare coffee after
              coffee beans are added into the vending machine. The push-button
              mechanism of operation is easy to operate, and people can even
              pick their selection from the menu on the front of the machine.
              We offer cloud-based technical support for any tricky situations
              faced.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- PROCESS EXPLORATION -------------------- */}
      <section className="explore-process">
        <h2 className="section-title">Explore Our Coffee</h2>

        <div className="process-flex">
          <img src="/images/office.jpg" className="process-img" alt="" />

          <div className="process-details">
            <div className="dropdown-box">
              <h3>Coffee Beans Selection</h3>
              <ul>
                <li>Premium roasted coffee beans</li>
                <li>Balanced aroma, acidity & sweetness</li>
                <li>Perfectly graded for office vending</li>
              </ul>
            </div>

            <div className="dropdown-box">
              <h3>Roasting & Grinding</h3>
              <p>Expertly roasted & consistently ground for the perfect cup.</p>
            </div>

            <div className="dropdown-box">
              <h3>Brewing Techniques</h3>
              <p>Tailored brewing brings out the richness in every sip.</p>
            </div>
          </div>
        </div>

        <p className="process-note">
          Embark on a sensory journey through the coffee-making process. Learn
          about the equipment and techniques that make your perfect cup.
        </p>
      </section>

      {/* -------------------- PRODUCTS -------------------- */}
      <section className="products-section">
        <h2 className="section-title">Explore Our Products</h2>

        {/* ---------- Bean to Cup ---------- */}
        <h3 className="sub-head">Bean to Cup</h3>
        <div className="products-grid three-col">
          <div className="product-card">
            <img src="/images/b1.png" alt="" />
            <p>MICROBAR</p>
          </div>
          <div className="product-card">
            <img src="/images/b2.png" alt="" />
            <p>PRIMEBAR</p>
          </div>
          <div className="product-card">
            <img src="/images/b3.png" alt="" />
            <p>BLACK & WHITE CLASSIC</p>
          </div>
        </div>

        {/* ---------- Powder to Cup ---------- */}
        <h3 className="sub-head">Powder to Cup</h3>

        <div className="powder-cup-top">
          <ul className="bullet-list">
            <li>Easy beverage dispensing</li>
            <li>Efficient heating system</li>
            <li>Designed for busy office environments</li>
            <li>Minimal maintenance required</li>
          </ul>

          <img src="/images/pcc.png" className="powder-img" alt="" />
        </div>

        <h3 className="sub-head">Coffee Powders</h3>

        <div className="products-grid three-col">
          <div className="product-card">
            <img src="/images/p1.png" alt="" />
            <p>AWAKE 70:30</p>
          </div>

          <div className="product-card">
            <img src="/images/p2.png" alt="" />
            <p>AWAKE 80:20</p>
          </div>
        <div className="product-card">
            <img src="/images/p3.png" alt="" />
            <p>AWAKE 80:20</p>
          </div>
        </div>
      </section>

      {/* -------------------- CONTACT SECTION -------------------- */}
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

export default OfficeCoffeeSolutions;

