import "./CategoryPage.css";

const furniture = [
  { id: 1, name: "Modern Sofa", price: "₹19999", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
  { id: 2, name: "Wooden Bed", price: "₹24999", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { id: 3, name: "Office Chair", price: "₹6999", image: "https://images.unsplash.com/photo-1582582429416-5a5c3e3a4b4a" },
  { id: 4, name: "Dining Table", price: "₹14999", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" }
]

export default function Furniture() {
  return (
    <div className="category-page">
      <div className="products-area">
        <div className="product-grid">

          {furniture.map(f => (
            <div className="product-card" key={f.id}>
              <img src={f.image} />
              <h4>{f.name}</h4>
              <p className="price">{f.price}</p>
              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}