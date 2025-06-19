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

  const increaseQuantity = (product) => {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (product) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.id == product.id) {
          if (item.quantity <= 1) {
            return item;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="app-container">
        <Navbar cartCount={cartItems.length} />
        <main>
          <Outlet
            context={{
              cartItems,
              addToCart,
              removeFromCart,
              increaseQuantity,
              decreaseQuantity,
            }}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
