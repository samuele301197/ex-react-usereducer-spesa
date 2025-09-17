import { useState, useReducer } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [kart, setKart] = useState([]);
  const upProdQuantity = (name, quantity) => {
    setKart((curr) =>
      curr.map((p) => (p.name === name ? { ...p, quantity } : p))
    );
  };
  const handleChange = (product) => {
    const addedProduct = kart.find((p) => p.name === product.name);
    if (addedProduct) {
      upProdQuantity(product.name, addedProduct.quantity + 1);
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

  const removeFromCart = (name) => {
    setKart((curr) => curr.filter((p) => p.name !== name));
  };

  const total = kart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>I miei Prodotti:</h1>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            <p>
              {prod.name}, {prod.price.toFixed(2)}€
            </p>
            <button onClick={() => handleChange(prod)}>Aggiungi</button>
          </li>
        ))}
      </ul>

      <h2>Carrello</h2>
      <ul>
        {kart.map((item, index) => (
          <li key={index}>
            <p>
              {item.name}, {item.price.toFixed(2)}€ ({item.quantity})
            </p>
            <button onClick={() => removeFromCart(item.name)}>Rimuovi</button>
            <h3>Totale: {total.toFixed(2)}€</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
