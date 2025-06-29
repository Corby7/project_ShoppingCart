import { ArrowLeft, CircleX, Minus, Plus } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderSummary from "../components/OrderSummary";
import ShoppingBagItem from "../components/ShoppingBagItem";
import "./ShoppingBagPage.css";

export default function ShoppingBagPage() {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, pokemon) => {
      return sum + pokemon.weight * pokemon.quantity;
    }, 0);

    const quantity = cartItems.reduce((sum, pokemon) => {
      return sum + pokemon.quantity;
    }, 0);

    setTotalPrice(total);
    setTotalQuantity(quantity);
  }, [cartItems]);

  return (
    <>
      <div className="shoppingbag-page">
        <button className="backbutton" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h2>Shopping bag</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate("/store")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <ul className="items-list">
            {cartItems.map((pokemon) => (
              <ShoppingBagItem
                key={pokemon.id}
                pokemon={pokemon}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
            ))}
          </ul>
        )}
        <OrderSummary
          totalPriceExcl={totalPrice}
          totalQuantity={totalQuantity}
        />
      </div>
    </>
  );
}
