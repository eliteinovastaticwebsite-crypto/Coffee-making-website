import React from "react";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-page">

      {/* ---- MAIN HEADING ---- */}
      <h1 className="main-title">OUR PRODUCTS</h1>

      {/* ---- TOP NAV ---- */}
      <div className="sub-menu">
        <a href="#machines">Our Machines</a>
        <a href="#powders">Our Powders</a>
        <a href="#beans">Our Beans</a>
        <a href="#partner">Our Partner</a>
      </div>

      {/* ------------------ COFFEE MACHINES SECTION ------------------ */}
      <section className="coffee-section" id="machines">
        <div className="coffee-text">
          <h2>Coffee Machines</h2>
          <p>
            If having the right coffee beans is important, then so is the right
            coffee machine to brew perfection. We've got machines for every need
            and every budget so that you get that golden brew every time.
          </p>
          <button className="order-btn">Order Now</button>
        </div>

        <div className="coffee-image">
          <img src="/images/coff mach.jpg" alt="Coffee Machine" />
        </div>
      </section>

      {/* ------------------ OUR MACHINES GRID ------------------ */}
      <h2 className="section-title">Our Machines</h2>
      <div className="machine-grid">
        <div className="machine-card">
          <img src="/images/mach1.png" alt="Espresso Machine" />
          <p className="m-title">Espresso Machine</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach2.png" alt="Filter Coffee Machine" />
          <p className="m-title">Filter Coffee Machine</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach3.png" alt="Capsule Coffee Machine" />
          <p className="m-title">Capsule Coffee Machine</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach4.png" alt="Coffee Vending Machine" />
          <p className="m-title">Coffee Vending Machine</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach5.png" alt="Drip Filter Coffee Machine" />
          <p className="m-title">Drip Filter Coffee Machine</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach6.png" alt="Pour Over" />
          <p className="m-title">Pour Over</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach7.png" alt="French Press" />
          <p className="m-title">French Press</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/mach8.png" alt="Cold Brew" />
          <p className="m-title">Cold Brew</p>
          <button className="order-small">Order Now</button>
        </div>
      </div>

      {/* ---- HERO SECTION ---- */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/images/coffee_beans.jpg" alt="Coffee Beans" />
          </div>

          <div className="hero-text">
            <h1 className="hero-title">Coffee Product</h1>
            <p className="hero-description">
              We handle everything—from processing coffee beans to training individuals in professional brewing techniques. After all, creating the perfect cup of coffee is an art that demands proper knowledge and practical experience, which can only be gained through expert guidance. Our skilled staff and trainees play a vital role in ensuring that every cup of coffee is brewed to perfection.

            </p>

            <div className="hero-images-grid">
              <img src="/images/coffee_cup.jpg" alt="Coffee Cup with Beans" />
              <img src="/images/Roasting_bean.jpg" alt="Roasting Coffee" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- MAIN HEADING ---- */}
      <h1 className="main-title">OUR PRODUCTS</h1>

      {/* ---- TOP NAV ---- */}
      <div className="sub-menu">
        <a href="#machines">Our Machines</a>
        <a href="#powders">Our Powders</a>
        <a href="#beans">Our Beans</a>
        <a href="#partner">Our Partner</a>
      </div>

      {/* ------------------ OUR POWDERS ------------------ */}
      <h2 className="section-title" id="powders">Our Powders</h2>
      <div className="machine-grid">

        <div className="machine-card">
          <img src="/images/p1.png" alt="Cappuccino" />
          <p className="m-title">Cappuccino</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/p2.png" alt="Espresso" />
          <p className="m-title">Espresso</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/p3.png" alt="Black Coffee" />
          <p className="m-title">Black Coffee</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/p4.png" alt="Americano" />
          <p className="m-title">Americano</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/p5.png" alt="Mocha" />
          <p className="m-title">Mocha</p>
          <button className="order-small">Order Now</button>
        </div>

      </div>

      {/* ------------------ OUR BEANS ------------------ */}
      <h2 className="section-title" id="beans">Our Beans</h2>
      <div className="machine-grid">

        <div className="machine-card">
          <img src="/images/b1.png" alt="Arabica" />
          <p className="m-title">Arabica</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/b2.png" alt="Robusta" />
          <p className="m-title">Robusta</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/b3.png" alt="Liberica" />
          <p className="m-title">Liberica</p>
          <button className="order-small">Order Now</button>
        </div>

        <div className="machine-card">
          <img src="/images/b4.png" alt="Excelsa" />
          <p className="m-title">Excelsa</p>
          <button className="order-small">Order Now</button>
        </div>

      </div>

      {/* ------------------ OUR PARTNERS ------------------ */}
      <h2 className="section-title" id="partner">Our Partners</h2>

      <div className="partner-grid">
  {[
    "/images/l1.png",
    "/images/l2.png",
    "/images/l3.png",
    "/images/l4.png",
    "/images/l5.png",
    "/images/l6.png",
    "/images/l7.png",
    "/images/l8.png",
    "/images/l9.png"
  ].map((src, index) => (
    <div className="partner-card" key={index}>
      <img src={src} alt={`Partner ${index + 1}`} />
    </div>
  ))}
</div>


    </div>
  );
};

export default ProductPage;





