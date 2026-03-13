import "./CategoryPage.css";

const products = [
  {
    id: 1,
    name: "Men Casual T-Shirt",
    price: "₹499",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Women Summer Dress",
    price: "₹899",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₹1499",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614"
  },
  {
    id: 4,
    name: "Sneakers",
    price: "₹1999",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

const Fashion = () => {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
          <h4>Brand</h4>
          <label><input type="checkbox"/> Nike</label>
          <label><input type="checkbox"/> Adidas</label>
          <label><input type="checkbox"/> Puma</label>
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

          {products.map((item) => (
            <div className="product-card" key={item.id}>

              <div className="discount">{item.discount}</div>

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

export default Fashion;