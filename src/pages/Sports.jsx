import "./CategoryPage.css";

const sports = [
  { id: 1, name: "Dumbbells Set", price: "₹1499", image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e" },
  { id: 2, name: "Yoga Mat", price: "₹699", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
  { id: 3, name: "Treadmill", price: "₹24999", image: "https://images.unsplash.com/photo-1571019613914-85f342c1d4b6" },
  { id: 4, name: "Skipping Rope", price: "₹199", image: "https://images.unsplash.com/photo-1594737625785-cb2d2b59f6d6" }
]

export default function Sports() {
  return (
    <div className="category-page">
      <div className="product-grid">

        {sports.map(s => (
          <div className="product-card" key={s.id}>
            <img src={s.image} />
            <h4>{s.name}</h4>
            <p className="price">{s.price}</p>
            <button className="cart-btn">Add To Cart</button>
          </div>
        ))}

      </div>
    </div>
  )
}