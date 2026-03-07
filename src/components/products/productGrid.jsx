import React, { useState } from "react";
import "./ProductGrid.css";

import p1 from "/images/bananaChipsFront.jpeg";
import p2 from "/images/makhanaBothSide.jpeg";

const products = [
  {
    id: 1,
    name: "Banana Chips",
    price: "₹99",
    image: p1,
  },
  {
    id: 2,
    name: "Makhana Fox Nut",
    price: "₹999",
    image: p2,
  },
];


//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

const ProductGrid = () => {
  return (
    <div className="product-section">
      <h2 className="section-title">Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h3>{product.name}</h3>

              <p className="price">{product.price}</p>

              <div className="rating">⭐⭐⭐⭐☆</div>

              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;