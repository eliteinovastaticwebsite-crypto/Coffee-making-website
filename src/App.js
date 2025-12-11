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
import FactoryPage from "./pages/FactoryPage";
import ResearchDevelopmentPage from "./pages/ResearchDevelopmentPage"; 
import Footer from "./components/Footer";
import CoffeeBeans from "./pages/CoffeeBeans";
import CoffeePowder from "./pages/CoffeePowder";
import PourOverCoffee from "./pages/PourOverCoffee";
import CoffeeAccessories from "./pages/CoffeeAccessories";
import FoodServicesPage from "./pages/FoodServicesPage";
import OfficeCoffeeSolutions from "./pages/OfficeCoffeeSolutions";
import DirectToConsumer from "./pages/DirectToConsumer";
import PublicLocation from "./pages/PublicLocation";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";

import ScrollToTop from "./components/ScrollToTop"; // ✅ NEW

export default function App() {
  return (
    <div className="site">
      <Header />

      {/* ✅ Scroll button outside Routes */}
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food-services" element={<FoodServicesPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/direct-to-consumer" element={<DirectToConsumer />} /> 
          <Route path="/public-locations" element={<PublicLocation />} />

          <Route path="/automatic-machines" element={<AutomaticMachines />} />
          <Route path="/semi-automatic-machines" element={<SemiAutomaticMachines />} />
          <Route path="/home-machines" element={<HomeMachines />} />
          <Route path="/coffee-beans" element={<CoffeeBeans />} />
          <Route path="/coffee-powder" element={<CoffeePowder />} />
          <Route path="/pour-over-coffee" element={<PourOverCoffee />} />
          <Route path="/coffee-accessories" element={<CoffeeAccessories />} />
          <Route path="/coffee-solutions" element={<OfficeCoffeeSolutions />} /> 

          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/research-development" element={<ResearchDevelopmentPage />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

