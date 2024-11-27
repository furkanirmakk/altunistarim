import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProductDetails from "./components/Product/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";


const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
