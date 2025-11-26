import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AutomaticMachines from "./pages/AutomaticMachines";
import SemiAutomaticMachines from "./pages/SemiAutomaticMachines";
import HomeMachines from "./pages/HomeMachines";
import ManufacturingPage from "./pages/Manufacturing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/automatic-machines" element={<AutomaticMachines />} />
          <Route path="/semi-automatic-machines" element={<SemiAutomaticMachines />} />
          <Route path="/home-machines" element={<HomeMachines />} />

          <Route path="/manufacturing" element={<ManufacturingPage />} />

          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


