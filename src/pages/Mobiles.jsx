import { Link } from "react-router-dom";
import "./CategoryPage.css";
import { useEffect, useState } from "react";
import { mobilesBrandFilters, mobilesPriceFilters } from "../config";
import { handleCheckboxChange, productsApi } from "./utils";

const Mobiles = () => {
const [products, setPoducts] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    productsApi({
      selectedItems,
      price,
      setPoducts
    });
  }, [selectedItems, price]);

  return (
    <div className="category-page">

      <aside className="filters">
              <h3>Filters</h3>
              <div className="filter-section">
                <h4>Brand</h4>
                {
                  mobilesBrandFilters.map((filter, i) => {
                    return (
                      <label key={i+filter.value}>
                        <input
                          type="checkbox"
                          value={filter.value}
                          name="brand"
                          onChange={(e) => handleCheckboxChange(e, setSelectedItems)}
                        />{" "}
                        {filter.value}
                      </label>
                    )
                  })
                }
              </div>

              <div className="filter-section">
                <h4>RAM</h4>
                <label><input type="checkbox" /> 4 GB</label>
                <label><input type="checkbox" /> 6 GB</label>
                <label><input type="checkbox" /> 8 GB</label>
              </div>
      
              <div className="filter-section">
                <h4>Price</h4>
                {
                  mobilesPriceFilters.map((filter, i) => {
                    return (
                      <label key={i+filter.value}>
                        <input
                          type="radio"
                          value={filter.value}
                          name="price"
                          checked={price === filter.value}
                          onChange={(e) => setPrice(e.target.value)}
                        />{" "}
                        {filter.uiValue}
                      </label>
                  )})
                }
              </div>
            </aside>

      <div className="products-area">
        <div className="sort-bar">
          <span>Sort By:</span>
          <button>Popularity</button>
          <button>Price Low → High</button>
          <button>Price High → Low</button>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <Link to={`/product/${item.name.replace(/\s+/g, "")}/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="cart-btn">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobiles;