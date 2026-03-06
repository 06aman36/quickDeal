import { useEffect, useState } from "react";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Quick Deal Products</h1>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      ))}
      
    </div>
  );
}

export default Home;