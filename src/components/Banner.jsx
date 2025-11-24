import React, { useState, useEffect } from "react";

const images = ["/banner1.jpg", "/banner2.jpg"];

export default function Banner() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="banner">
      <button className="slide-left" onClick={() => setI((p) => (p - 1 + images.length) % images.length)}>❮</button>
      <img src={images[i]} alt="banner" className="banner-img" />
      <button className="slide-right" onClick={() => setI((p) => (p + 1) % images.length)}>❯</button>
    </section>
  );
}

