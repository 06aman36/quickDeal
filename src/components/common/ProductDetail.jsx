import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    debugger;
    axios.get(`/api/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
      {/* Images */}
      <div className="image-gallery">
        <img src={product.images[0]} alt={product.name} />
        <div className="thumbnails">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt="thumb" />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="details">
        <h1>{product.name}</h1>
        <h3>Brand: {product.brand}</h3>
        <p>₹{product.price}</p>

        {/* Specs */}
        <table>
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Actions */}
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;