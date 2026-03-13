import "./CategoryPage.css";

const items = [
  { id: 1, name: "Wall Clock", price: "₹799", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 2, name: "Table Lamp", price: "₹999", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" },
  { id: 3, name: "Decor Vase", price: "₹599", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { id: 4, name: "Photo Frame", price: "₹299", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }
]

export default function HomeAccessories() {
  return (
    <div className="category-page">
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
  )
}