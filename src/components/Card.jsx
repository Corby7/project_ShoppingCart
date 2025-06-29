import "./Card.css";
import { ShoppingBasket } from "lucide-react";

export default function Card({ pokemon, addToCart }) {
  const getGeneration = (id) => {
    if (id <= 151) return "generation-i";
    if (id <= 251) return "generation-ii";
    if (id <= 386) return "generation-iii";
    if (id <= 493) return "generation-iv";
    if (id <= 649) return "generation-v";
    if (id <= 721) return "generation-vi";
    if (id <= 809) return "generation-vii";
    if (id <= 905) return "generation-viii";
    if (id <= 1025) return "generation-ix";
    return "unknown";
  };

  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="card-bottom">
        <div className="info">
          <h3 id="pokemon-name">{pokemon.name}</h3>
          <h5 id="pokemon-generation">{getGeneration(pokemon.id)}</h5>
          <div className="types">
            {pokemon.types.map((typeObj) => (
              <span
                key={typeObj.slot}
                className={`type-badge type-${typeObj.type.name}`}
              >
                <h6>{typeObj.type.name}</h6>
              </span>
            ))}
          </div>
        </div>
        <span className="price-basket">
          <h4>₽{pokemon.weight.toFixed(2)}</h4>
          <button
            className="addtobag-btn"
            title="Add to bag"
            onClick={() => addToCart(pokemon)}
          >
            <ShoppingBasket size={20} />
          </button>
        </span>
      </div>
    </div>
  );
}
