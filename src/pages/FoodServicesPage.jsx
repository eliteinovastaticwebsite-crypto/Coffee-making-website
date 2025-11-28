import React from 'react';
import './FoodServicesPage.css';

const FoodServicesPage = () => {
  return (
    <div className="food-services-page">
      
      {/* Hero Banner */}
      <section className="fs-hero-banner">
        <div className="fs-banner-content">
          <h1>FOOD SERVICES</h1>
          <p>Coffee is the order of the day wherever you are in the world!</p>
        </div>
        <div className="fs-banner-image">
          <img src="/images/fs2.jpg" alt="Coffee with Cardamom" />
        </div>
      </section>

      {/* World of Coffee Section */}
      <section className="fs-world-coffee">
        <h2>World Of Coffee</h2>
        <div className="fs-world-content">
          <div className="fs-world-image">
            <img src="/images/wc1.jpg" alt="Coffee World Map" />
          </div>
          <div className="fs-world-text">
            <p>
              We have different business formats to suit your unique requirements across colleges, office food courts, hospitals, and more. Choose from small to large kiosks, according to your location like Hotel, Restaurant, Cafe, Travel Retails, Airports, Cinemas – PVR Inox, customer base and business appetite.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="fs-products-section">
        <h2>Explore Our Products</h2>
        
        {/* Bean to Cup */}
        <div className="fs-product-category">
          <h3>Bean to Cup</h3>
          
          <div className="fs-machines-grid">
            {/* Michigan Machine */}
            <div className="fs-machine-item">
              <div className="fs-machine-box">
                <div className="fs-machine-front">
                  <img src="/images/michigan.png" alt="Michigan" />
                </div>
                <div className="fs-machine-back">
                  <h4>BLACK & WHITE CLASSIC</h4>
                  <ul>
                    <li>Continuous dispensing system with consistent quality in every cup</li>
                    <li>Versatile beverage selector</li>
                    <li>Operates with almost zero wastage</li>
                    <li>Automatic dosing check at frequent intervals</li>
                    <li>Tamper proof reading system for hassle-free billing</li>
                  </ul>
                  <button className="fs-enquire-btn">Enquire Now</button>
                </div>
              </div>
              <p className="fs-machine-label">MICHIGAN</p>
            </div>

            {/* Printbar Machine */}
            <div className="fs-machine-item">
              <div className="fs-machine-box">
                <div className="fs-machine-front">
                  <img src="/images/printbar.png" alt="Printbar" />
                </div>
                <div className="fs-machine-back">
                  <h4>PRINTBAR</h4>
                  <ul>
                    <li>Professional bean to cup machine</li>
                    <li>High capacity brewing system</li>
                    <li>Touch screen interface</li>
                    <li>Consistent quality output</li>
                    <li>Energy efficient design</li>
                  </ul>
                  <button className="fs-enquire-btn">Enquire Now</button>
                </div>
              </div>
              <p className="fs-machine-label">PRINTBAR</p>
            </div>
          </div>
        </div>

        {/* Powder to Cup */}
        <div className="fs-product-category">
          <h3>Powder to Cup</h3>
          
          <div className="fs-machines-grid">
            {/* Stellara Machine */}
            <div className="fs-machine-item">
              <div className="fs-machine-box">
                <div className="fs-machine-front">
                  <img src="/images/stellara1.png" alt="Stellara" />
                </div>
                <div className="fs-machine-back">
                  <h4>STELLARA</h4>
                  <ul>
                    <li>Advanced touchscreen controls</li>
                    <li>Multiple beverage options</li>
                    <li>Precision powder dispensing</li>
                    <li>Easy maintenance system</li>
                    <li>Modern elegant design</li>
                  </ul>
                  <button className="fs-enquire-btn">Enquire Now</button>
                </div>
              </div>
              <p className="fs-machine-label">STELLARA</p>
            </div>

            {/* Fiji Direct Machine */}
            <div className="fs-machine-item">
              <div className="fs-machine-box">
                <div className="fs-machine-front">
                  <img src="/images/fiji direct.png" alt="Fiji Direct" />
                </div>
                <div className="fs-machine-back">
                  <h4>FIJI DIRECT</h4>
                  <ul>
                    <li>Compact design for any space</li>
                    <li>Quick brewing time</li>
                    <li>User-friendly interface</li>
                    <li>Cost-effective solution</li>
                    <li>Reliable performance</li>
                  </ul>
                  <button className="fs-enquire-btn">Enquire Now</button>
                </div>
              </div>
              <p className="fs-machine-label">FIJI DIRECT</p>
            </div>
          </div>
          
          <button className="fs-explore-btn">Explore More</button>
        </div>
      </section>

      {/* Experience the Process */}
      <section className="fs-experience-section">
        <div className="fs-experience-content">
          <h2>Experience the Process</h2>
          <p>
            As a pioneer among coffee machine suppliers in the Indian coffee space, our food services include 360-degree coffee solutions. We cover everything from the processing of coffee beans, collaborating with coffee bean wholesalers, right down to training people for coffee preparation and brewing. After all, the process of coffee concoction is an art and requires fine knowledge and on-site skills that can be garnered only with the right tutelage. Our employees and trainees, equipped with coffee vending machine supplies, are the ones responsible for the final cup of coffee that is brewed. So, we invest a great deal in nurturing our people's power so that they are top-of-the-line professionals you can rely on for your brewing journey in the world, making us a trusted coffee maker supplier and coffee suppliers for business.
          </p>
        </div>
        
        <div className="fs-reasons-box">
          <h3>REASONS TO CHOOSE COFFEE & LOVE</h3>
          <ul>
            <li>Pioneers in coffee vending machine supplier since 1996</li>
            <li>Handpicked ingredients for consistent quality and taste</li>
            <li>Convenient cloud-based service solutions</li>
            <li>Sophisticated and efficient machines</li>
            <li>Strong and widespread network</li>
          </ul>
        </div>

        <div className="fs-expandable-sections">
          <div className="fs-expandable-item">
            <h4>BREWING THE PERFECT CUP FOR OVER 2 DECADES</h4>
          </div>
          <div className="fs-expandable-item">
            <h4>CLOUD BASED TECHNICAL SUPPORT</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="fs-contact-section">
        <h2>Contact Us</h2>
        <div className="fs-contact-form">
          <input type="text" placeholder="Name*" />
          <input type="tel" placeholder="Phone*" />
          <input type="email" placeholder="Email*" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button className="fs-submit-btn">Submit</button>
        </div>
      </section>

    </div>
  );
};

export default FoodServicesPage;