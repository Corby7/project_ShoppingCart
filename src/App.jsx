import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== product.id);
    });
  };

  return (
    <>
      <div className="app-container">
        <Navbar cartCount={cartItems.length} />
        <main>
          <Outlet context={{ cartItems, addToCart, removeFromCart }} />
        </main>
        <Footer />
      </div>
    </>
  );
}
