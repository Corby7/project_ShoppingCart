import { ArrowLeft, CircleX, Minus, Plus } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderSummary from "../components/OrderSummary";
import "./ShoppingBagPage.css";

export default function ShoppingBagPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const quantity = cartItems.reduce((sum, item) => {
      return sum + item.quantity;
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
            {cartItems.map((product) => (
              <li className="item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="info">
                  <h3>{product.title}</h3>
                  <h4>${product.price}</h4>
                </div>
                <div className="quantity-control">
                  <button
                    className="minusquantity-btn"
                    onClick={() => decreaseQuantity(product)}
                  >
                    <Minus size={14} />
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="plusquantity-btn"
                    onClick={() => increaseQuantity(product)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <h4>${product.quantity * product.price}</h4>
                <button
                  className="removefrombag-btn"
                  onClick={() => removeFromCart(product)}
                >
                  <CircleX size={18} />
                </button>
              </li>
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
