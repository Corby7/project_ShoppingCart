import "./ShoppingBagItem.css";
import { CircleX, Minus, Plus } from "lucide-react";

export default function ShoppingBagItem({
  pokemon,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}) {
  return (
    <li className="item">
      <span className="item-left">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="info">
          <h3 id="pokemon-name">{pokemon.name}</h3>
          <h4 id="pokemon-price">₽{pokemon.weight.toFixed(2)}</h4>
        </div>
      </span>
      <span className="item-right">
        <span className="quantity-total">
          {" "}
          <div className="quantity-control">
            <button
              className="minusquantity-btn"
              onClick={() => decreaseQuantity(pokemon)}
            >
              <Minus size={14} />
            </button>
            <p>{pokemon.quantity}</p>
            <button
              className="plusquantity-btn"
              onClick={() => increaseQuantity(pokemon)}
            >
              <Plus size={14} />
            </button>
          </div>
          <h4>₽{(pokemon.quantity * pokemon.weight).toFixed(2)}</h4>
        </span>

        <button
          className="removefrombag-btn"
          onClick={() => removeFromCart(pokemon)}
        >
          <CircleX size={18} />
        </button>
      </span>
    </li>
  );
}
