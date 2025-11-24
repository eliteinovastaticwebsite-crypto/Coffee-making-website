import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


