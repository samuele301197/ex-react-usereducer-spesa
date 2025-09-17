import { useState, useReducer } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [kart, setKart] = useState([]);
  const handleChange = (product) => {
    const isProductIn = kart.some((p) => p.name === product.name);
    if (isProductIn) {
      return;
    }
    setKart((curr) => [
      ...curr,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  return (
    <div>
      <h1>I miei Prodotti:</h1>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            <p>
              {prod.name}, {prod.price.toFixed(2)}€ ({prod.quantity})
            </p>
            <button onClick={() => handleChange(prod)}>Aggiungi</button>
          </li>
        ))}
      </ul>

      <h2>Carrello</h2>
      <ul>
        {kart.map((item, index) => (
          <li key={index}>
            {item.name}, {item.price.toFixed(2)}€ ({item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
