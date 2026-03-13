import "./CategoryPage.css";

const autoProducts = [
  {
    id: 1,
    name: "Car Seat Cover",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
  },
  {
    id: 2,
    name: "Car Mobile Holder",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1616423841125-8307665a0462"
  },
  {
    id: 3,
    name: "Bike Helmet",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60"
  },
  {
    id: 4,
    name: "Car Vacuum Cleaner",
    price: "₹2,199",
    image: "https://images.unsplash.com/photo-1624973684086-3f1b42a9d21b"
  }
];

const AutoAccessories = () => {
  return (
    <div className="category-page">

      <aside className="filters">

        <h3>Filters</h3>

        <div className="filter-section">
          <h4>Vehicle Type</h4>
          <label><input type="checkbox" /> Car</label>
          <label><input type="checkbox" /> Bike</label>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <label><input type="checkbox" /> ₹0 - ₹500</label>
          <label><input type="checkbox" /> ₹500 - ₹1500</label>
          <label><input type="checkbox" /> ₹1500+</label>
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

          {autoProducts.map((item) => (
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

export default AutoAccessories;