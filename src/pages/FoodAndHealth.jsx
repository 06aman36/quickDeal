import "./CategoryPage.css";

const items = [
  { id: 1, name: "Protein Powder", price: "₹2499", image: "https://images.unsplash.com/photo-1594737625785-cb2d2b59f6d6" },
  { id: 2, name: "Dry Fruits Pack", price: "₹899", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
  { id: 3, name: "Organic Honey", price: "₹399", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924" },
  { id: 4, name: "Green Tea", price: "₹299", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655" }
]

export default function FoodAndHealth() {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>
        <label><input type="checkbox" /> Supplements</label>
        <label><input type="checkbox" /> Organic</label>
      </aside>

      <div className="products-area">
        <div className="product-grid">

          {items.map(i => (
            <div className="product-card" key={i.id}>
              <img src={i.image} />
              <h4>{i.name}</h4>
              <p className="price">{i.price}</p>
              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}