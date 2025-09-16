function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  return (
    <div>
      <h1>I miei Prodotti:</h1>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name}, {prod.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
