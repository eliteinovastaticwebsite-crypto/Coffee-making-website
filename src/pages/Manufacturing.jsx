import React from 'react';
import './Manufacturing.css';

const ManufacturingPage = () => {
  return (
    <div className="manufacturing-page">
      
      {/* Hero Section */}
      <section className="manufacturing-hero">
        <h1>MANUFACTURING</h1>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <img src="/images/coffee1.jpg" alt="Coffee Making" />
            <img src="/images/coffee2.jpg" alt="Coffee Roasting" />
          </div>
          
          <div className="about-content">
            <h2>SERVING THE FINEST INDIAN COFFEE FOR OVER 2 DECADES</h2>
            <ul>
              <li>Since 1996</li>
              <li>15+ million cups of coffee brewed every month</li>
              <li>Pioneer in Indian coffee vending business</li>
              <li>Serving across Hotels, Restaurants, Cafes, Corporate Offices, Public Locations and Homes</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
            <p className="about-tagline">
              Perfecting The Art Of Fine Coffees<br />
              Since 1996
            </p>
          </div>
        </div>
      </section>

      {/* Roasting Plant Section */}
      <section className="roasting-plant-section">
        <h2>Coffee Roasting Plant</h2>
        <p>
          Our Lavazza Training Center is an authentic coffee university: we organize
          training courses for baristas, catering staff, sales reps, distributors, newly hired
          staff, journalists and opinion leaders.
        </p>
        
        <div className="plant-container">
          <div className="plant-info">
            <h3>Sri City – Tada, Andhra Pradesh</h3>
            <ul>
              <li>Fully automated manufacturing unit covering an area of 40,000 square meters</li>
              <li>German technology roasting, grinding and packaging line with nitrogen flush system</li>
              <li>Double roasting process for consistency and one way degassing valve to retain freshness and aroma</li>
              <li>Three stage coffee grinding with cooling technology to ensure better aroma for ground coffees</li>
            </ul>
          </div>
          
          <div className="plant-image">
            <img src="/images/coffee_roasting_machine.jpg" alt="Coffee Roasting Machine" />
          </div>
        </div>
      </section>

      {/* Key Attributes Section */}
      <section className="key-attributes-section">
        <h2>Key Attributes Of The Plant's Superiority</h2>
        
        <div className="attributes-grid">
          <div className="attribute-item">
            <img src="/images/coffee plant.jpg" alt="Roasting Machine" className="attribute-image" />
            <div className="attribute-content">
              <h3>GREEN COFFEE SILO</h3>
              <p>High number of Grades for blend flexibility, high storage capacity, automatic cleaning process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Section - Roasters */}
      <section className="red-section">
        <div className="red-grid">
          <div className="red-content">
            <h3>ROASTERS AND ROASTED COFFEE SILO</h3>
            <p>Automatic control of temperature/timing, pre-heating, catalytic destoner, nitrogen compensation in roasted coffee silo</p>
            
            <h3>PACKAGING</h3>
            <p>Automatic packaging machine, quality standards as per international standard, flexibility in formats and bag-style, flexibility in labeling and coding</p>
          </div>
          
          <div className="red-images">
            <img src="/images/cofee roast.jpg" alt="Coffee Roasting" />
            <img src="/images/coffee roast.jpg" alt="Roasted Coffee Silo" />
          </div>
        </div>
      </section>

      {/* Coffee Bean Selection Section */}
      <section className="bean-selection-section">
        <h2>Coffee Bean Product Selection</h2>
        
        <div className="bean-container">
          <div className="bean-item">
            <img src="/images/cofe powder.jpg" alt="Coffee Powder" />
            <h3>Coffee Powder Variants</h3>
            <ul>
              <li>Pure Filter Coffee Powder</li>
              <li>Coffee Chicory Blend</li>
              <li>Arabica & Robusta Blend</li>
              <li>Kumbakonam Filter Coffee Blend</li>
              <li>Customised Blend</li>
            </ul>
          </div>
          
          <div className="bean-item">
            <img src="/images/cofe bean.jpg" alt="Roasted Coffee Beans" />
            <h3>Roasted Coffee Beans</h3>
            <ul>
              <li>100% Arabica</li>
              <li>100% Robusta</li>
              <li>Arabica/Robusta Blend</li>
              <li>Customised blend</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="specifications-section">
        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon">☕</div>
            <h4>Type of Roasting</h4>
            <p>Drum</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">📊</div>
            <h4>Type of Profile</h4>
            <p>Slow Roast, Quick Roast & Drit-Roast</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">📚</div>
            <h4>Minimum Batch Size</h4>
            <p>250 kg / 4 ton per hour</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">📦</div>
            <h4>Shelf Life</h4>
            <p>9 – 12 Months</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">📈</div>
            <h4>Supply Ability</h4>
            <p>10 – 30 Metric Ton per week</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">💧</div>
            <h4>Moisture</h4>
            <p>Less than 5%</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">🛒</div>
            <h4>MOQ</h4>
            <p>500 kg for customised blend – Regular available blend – No MOQ</p>
          </div>
          
          <div className="spec-card">
            <div className="spec-icon">🚚</div>
            <h4>Delivery Lead Time</h4>
            <p>7 – 15 days for instock product, 4 – 5 weeks for customised product / packing</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingPage;