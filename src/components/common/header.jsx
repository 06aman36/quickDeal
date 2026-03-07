import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FaTshirt, FaMobileAlt, FaLaptop, FaHome, FaCouch, FaBook, FaRegUserCircle , FaAngleDown } from "react-icons/fa";
import { GiLipstick, GiBabyBottle, GiScooter, GiWeightLiftingUp } from "react-icons/gi";
import { MdKitchen, MdFastfood, MdOutlineToys } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Header.css";

const Header = () => {
 
  const categories = [
    { name: "For You", icon: <AiOutlineShopping />, path: "/" },
    { name: "Fashion", icon: <FaTshirt />, path: "/fashion" },
    { name: "Mobiles", icon: <FaMobileAlt />, path: "/mobiles" },
    { name: "Beauty", icon: <GiLipstick />, path: "/beauty" },
    { name: "Electronics", icon: <FaLaptop />, path: "/electronics" },
    { name: "Home", icon: <FaHome />, path: "/home" },
    { name: "Appliances", icon: <MdKitchen />, path: "/appliances" },
    { name: "Toys, baby & kids", icon: <MdOutlineToys />, path: "/toys" },
    { name: "Food & Health", icon: <MdFastfood />, path: "/food-health" },
    { name: "Auto Accessories", icon: <BsCart />, path: "/auto-accessories" },
    { name: "2 Wheelers", icon: <GiScooter />, path: "/2-wheelers" },
    { name: "Sports & Fitness", icon: <GiWeightLiftingUp />, path: "/sports-fitness" },
    { name: "Books & Media", icon: <FaBook />, path: "/books-media" },
    { name: "Furniture", icon: <FaCouch />, path: "/furniture" },
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          QuickDeal
        </div>
        <input
          id="searchItem"
          type="text"
          className="search-bar"
          placeholder="Search for Products, Brands and More"
        />
        <div className="nav-icons">
          <span className="login"><FaRegUserCircle  /> Login <FaAngleDown /></span>
          <span className="more">More <FaAngleDown /></span>
          <span className="cart"><HiOutlineShoppingCart /> Cart</span>
        </div>
      </div>

      <nav className="category-bar">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="category-item">
            <span className="icon">{cat.icon}</span>
            <span className="label">{cat.name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;