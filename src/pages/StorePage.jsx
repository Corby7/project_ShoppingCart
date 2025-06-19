import { useState, useEffect } from "react";
import { ShoppingBasket } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import "./StorePage.css";

export default function ShoppingPage() {
  const { addToCart } = useOutletContext();

  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const inventoryFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setInventory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    inventoryFetch();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="store-page">
        <h2>Items ({inventory.length})</h2>
        <div className="store-grid">
          {inventory.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <hr />
              <div className="card-bottom">
                <div className="info">
                  <h3>{product.title}</h3>
                  <h4> {product.price}</h4>
                  <h5> {product.category}</h5>
                </div>
                <button
                  className="addtobag-btn"
                  title="Add to bag"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingBasket size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
