import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const slides = [
    { img: "/banner1.jpg" },
    { img: "/banner2.jpg" }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // match CSS transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* HERO SLIDER FULL SCREEN */}
      <div className="hero-container-fullscreen">
        <img
          src={slides[index].img}
          alt={`Coffee banner ${index + 1}`}
          className={`hero-image ${fade ? "fade-in" : "fade-out"}`}
          aria-label="Rotating coffee banner"
        />
      </div>

      {/* INTRO TEXT */}
      <section className="intro-section">
        <h2 className="section-title">Coffee & Love — Coffee Solutions</h2>
        <p className="section-subtitle">
          We deliver coffee machines, roasted coffee products and 360° coffee solutions for both business and home.
        </p>

        {/* BUTTONS */}
        <div className="btn-container">
          <a href="/products" className="btn-primary">Shop Machines</a>
          <a href="/contact-us" className="btn-outline">Get Quote</a>
        </div>
      </section>
    </div>
  );
}






