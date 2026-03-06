const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">QuickDeal</div>

        <ul className="nav">
          <li>Home</li>
          <li>Products</li>
          <li>Deals</li>
          <li>Contact</li>
        </ul>

        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;