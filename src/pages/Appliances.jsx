import "./CategoryPage.css";

const appliances = [
  {
    id: 1,
    name: "LG Double Door Refrigerator",
    price: "₹38,999",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    id: 2,
    name: "Samsung Washing Machine",
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c"
  },
  {
    id: 3,
    name: "IFB Microwave Oven",
    price: "₹12,999",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
  },
  {
    id: 4,
    name: "Philips Air Fryer",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1617191518502-6d2dbe6c4c9c"
  }
];

const Appliances = () => {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
          <h4>Brand</h4>
          <label><input type="checkbox" /> LG</label>
          <label><input type="checkbox" /> Samsung</label>
          <label><input type="checkbox" /> IFB</label>
          <label><input type="checkbox" /> Philips</label>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <label><input type="checkbox" /> ₹0 - ₹10,000</label>
          <label><input type="checkbox" /> ₹10,000 - ₹30,000</label>
          <label><input type="checkbox" /> ₹30,000+</label>
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

          {appliances.map((item) => (
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

export default Appliances;