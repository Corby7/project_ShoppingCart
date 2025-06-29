import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import "./StorePage.css";

export default function ShoppingPage() {
  const { addToCart } = useOutletContext();

  const [inventory, setInventory] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarters = async () => {
      try {
        const starterIds = [
          // Gen 1
          1, 4, 7,
          // Gen 2
          152, 155, 158,
          // Gen 3
          252, 255, 258,
          // Gen 4
          387, 390, 393,
          // Gen 5
          495, 498, 501,
          // Gen 6
          650, 653, 656,
          // Gen 7
          722, 725, 728,
          // Gen 8
          810, 813, 816,
          // Gen 9
          906, 909, 912,
        ];

        const promises = starterIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json()
          )
        );

        const starterData = await Promise.all(promises);
        setInventory(starterData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarters();
  }, []);

  if (loading) return <div>Loading pokemons...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="store-page">
        <h2>Items ({inventory.length})</h2>
        <div className="store-grid">
          {inventory.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}
