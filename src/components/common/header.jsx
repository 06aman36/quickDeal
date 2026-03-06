import "./Header.css";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        QuickDeal
      </div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/deals">Deals</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      <div className="actions">
        <button className="cart">Cart</button>
        <button className="login">Login</button>
      </div>

    </header>
  );
};

export default Header;