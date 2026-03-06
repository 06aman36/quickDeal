import { useEffect, useState } from "react";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="products">

      <h1>Quick Deal Products</h1>

      {products.map((p, index) => (
        <div className="product-card" key={index}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <p>Category: {p.category}</p>
        </div>
      ))}

    </div>
  )

}

export default Home