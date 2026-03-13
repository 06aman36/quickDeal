import "./CategoryPage.css";

const mobiles = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹79,999",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "₹74,999",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: "₹59,999",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    id: 4,
    name: "Google Pixel 8",
    price: "₹69,999",
    image: "https://images.unsplash.com/photo-1603898037225-5e5c2b4d1e4c"
  }
];

const Mobiles = () => {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
          <h4>Brand</h4>
          <label><input type="checkbox" /> Apple</label>
          <label><input type="checkbox" /> Samsung</label>
          <label><input type="checkbox" /> OnePlus</label>
        </div>

        <div className="filter-section">
          <h4>RAM</h4>
          <label><input type="checkbox" /> 4 GB</label>
          <label><input type="checkbox" /> 6 GB</label>
          <label><input type="checkbox" /> 8 GB</label>
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

          {mobiles.map((item) => (

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

export default Mobiles;