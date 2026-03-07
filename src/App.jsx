import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Fashion from "../src/pages/Fashion";
import Mobiles from "../src/pages/Mobiles";
import Beauty from "../src/pages/Beauty";
import Electronics from "../src/pages/Electronics";
import HomeAccessoriess from "../src/pages/HomeAccessoriess";
import Appliances from "../src/pages/Appliances";
import KidsToys from "../src/pages/KidsToys";
import FoodAndHealth from "../src/pages/FoodAndHealth";
import AutoAccessories from "../src/pages/AutoAccessories";
import TwoWheelers from "../src/pages/TwoWheelers";
import Sports from "../src/pages/Sports";
import Books from "../src/pages/Books";
import Furniture from "../src/pages/Furniture";
import Home from "./pages/Home";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/home" element={<HomeAccessoriess />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/toys" element={<KidsToys />} />
        <Route path="/food-health" element={<FoodAndHealth />} />
        <Route path="/auto-accessories" element={<AutoAccessories />} />
        <Route path="/2-wheelers" element={<TwoWheelers />} />
        <Route path="/sports-fitness" element={<Sports />} />
        <Route path="/books-media" element={<Books />} />
        <Route path="/furniture" element={<Furniture />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;