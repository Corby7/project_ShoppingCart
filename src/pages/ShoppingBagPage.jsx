import { ArrowLeft, CircleX, Minus, Plus } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./ShoppingBagPage.css";

export default function ShoppingBagPage() {
  const { cartItems, removeFromCart } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="shoppingbag-page">
        <button className="backbutton" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </button>
        <h2>Shopping bag</h2>
        <ul className="items-list">
          {cartItems.map((product) => (
            <li className="item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="info">
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
              </div>
              <div className="quantity-control">
                <button className="minusquantity-btn">
                  <Minus size={14} />
                </button>
                <p>{product.quantity}</p>
                <button className="plusquantity-btn">
                  <Plus size={14} />
                </button>
              </div>
              <button
                className="removefrombag-btn"
                onClick={() => removeFromCart(product)}
              >
                <CircleX size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
