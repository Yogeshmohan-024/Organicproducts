import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import AboutUs from "./Component/AboutUs.jsx";
import ContactUs from "./Component/ContactUs.jsx";
import Support from "./Component/Support.jsx";
import Register from "./Component/Register.jsx";
import Home from "./Component/Home.jsx";
import Organic from "./Component/Organic.jsx";
import Product from "./Component/Product.jsx";
import AddToCart from "./Component/addtocart.jsx";
import CheckoutPage from "./Component/Checkout.jsx";
import TermsAndConditions from "./Component/Terms.jsx";
import TermsAndService from "./Component/Termandservice.jsx";


// Create Cart Context
export const CartContext = createContext();

const App = () => {
  // Local Storage: Initialize and Manage Cart State
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Persist Cart State to Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div>
          <Header />
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/register" element={<Register />} />
            <Route path="/organic" element={<Organic />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/terms-of-service" element={<TermsAndService />} />
            {/* Add more routes as needed */}

          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
