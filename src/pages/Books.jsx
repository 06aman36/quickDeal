import "./CategoryPage.css";

const books = [
  { id: 1, name: "Atomic Habits", price: "₹399", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
  { id: 2, name: "Rich Dad Poor Dad", price: "₹299", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d" },
  { id: 3, name: "Psychology of Money", price: "₹349", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { id: 4, name: "Deep Work", price: "₹420", image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090" }
];

export default function Books() {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>
        <label><input type="checkbox" /> Self Help</label>
        <label><input type="checkbox" /> Business</label>
        <label><input type="checkbox" /> Fiction</label>
      </aside>

      <div className="products-area">

        <div className="product-grid">
          {books.map(item => (
            <div className="product-card" key={item.id}>
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p className="price">{item.price}</p>
              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}