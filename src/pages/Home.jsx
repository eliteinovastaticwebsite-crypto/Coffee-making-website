import React from "react";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <section id="home" className="home">
      <Banner />
      <div className="intro">
        <h1>Coffee & Love — Coffee Solutions</h1>
        <p>We deliver coffee machines, roasted coffee products and 360° coffee solutions for business and home.</p>
        <div className="cta-row">
          <a className="btn" href="#products">Shop Machines</a>
          <a className="btn outline" href="#contact">Get Quote</a>
        </div>
      </div>
    </section>
  );
}
