import "./CategoryPage.css";

const toys = [
  { id: 1, name: "Remote Car", price: "₹999", image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60" },
  { id: 2, name: "Teddy Bear", price: "₹699", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4" },
  { id: 3, name: "Building Blocks", price: "₹799", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b" },
  { id: 4, name: "Kids Puzzle", price: "₹499", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2" }
]

export default function KidsToys() {
  return (
    <div className="category-page">
      <div className="product-grid">

        {toys.map(t => (
          <div className="product-card" key={t.id}>
            <img src={t.image} />
            <h4>{t.name}</h4>
            <p className="price">{t.price}</p>
            <button className="cart-btn">Add To Cart</button>
          </div>
        ))}

      </div>
    </div>
  )
}