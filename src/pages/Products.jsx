import React from "react";

const productList = [
  { id: 1, title: "Automatic Coffee Machine", desc: "Commercial automatic machine" },
  { id: 2, title: "Semi-Automatic Machine", desc: "Barista-style semi automatic" },
  { id: 3, title: "Home Machines", desc: "Compact home brewers" },
  { id: 4, title: "Coffee Beans", desc: "Single origin & blends" },
  { id: 5, title: "Coffee Powder", desc: "Ground coffee for filter" },
  { id: 6, title: "Pour Over", desc: "Filter & manual brewing" },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {productList.map(p => (
          <div key={p.id} className="card">
            <div className="card-media" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button className="btn small">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
