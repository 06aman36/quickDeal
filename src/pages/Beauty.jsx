import "./CategoryPage.css";

const beautyProducts = [
  {
    id: 1,
    name: "Lipstick Set",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
  },
  {
    id: 2,
    name: "Face Cream",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a"
  },
  {
    id: 3,
    name: "Perfume",
    price: "₹1299",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
  },
  {
    id: 4,
    name: "Makeup Kit",
    price: "₹1499",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  }
];

const Beauty = () => {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
          <h4>Category</h4>
          <label><input type="checkbox"/> Makeup</label>
          <label><input type="checkbox"/> Skincare</label>
          <label><input type="checkbox"/> Perfume</label>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <label><input type="checkbox"/> ₹0 - ₹500</label>
          <label><input type="checkbox"/> ₹500 - ₹1000</label>
          <label><input type="checkbox"/> ₹1000+</label>
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

          {beautyProducts.map((item) => (

            <div className="product-card" key={item.id}>

              <img src={item.image} alt={item.name} />

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

export default Beauty;