import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>QuickDeal</h3>
          <p>Best deals on your favorite products.</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <p>Mobiles</p>
          <p>Laptops</p>
          <p>Accessories</p>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Returns</p>
          <p>FAQs</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QuickDeal. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
