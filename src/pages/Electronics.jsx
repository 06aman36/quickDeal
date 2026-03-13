import "./CategoryPage.css";

const products = [
  { id: 1, name: "Bluetooth Speaker", price: "₹1999", image: "https://images.unsplash.com/photo-1585386959984-a41552231658" },
  { id: 2, name: "Wireless Earbuds", price: "₹2999", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90" },
  { id: 3, name: "Smart Watch", price: "₹3499", image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c" },
  { id: 4, name: "Gaming Mouse", price: "₹999", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7" }
]

export default function Electronics() {
  return (
    <div className="category-page">

      <aside className="filters">
        <h3>Filters</h3>
        <label><input type="checkbox" /> Audio</label>
        <label><input type="checkbox" /> Smart Devices</label>
        <label><input type="checkbox" /> Accessories</label>
      </aside>

      <div className="products-area">
        <div className="product-grid">

          {products.map(p => (
            <div className="product-card" key={p.id}>
              <img src={p.image} />
              <h4>{p.name}</h4>
              <p className="price">{p.price}</p>
              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}