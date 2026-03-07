import React from "react";
import Categories from "../components/home/Categories"
import OfferBanner from "../components/home/OfferBanner"
import ProductGrid from "../components/products/productGrid"
import Hero from "../../src/components/home/Hero";

const Home = () => {
  return (
     <>
      <Hero />

      <Categories />

      <ProductGrid />

      <OfferBanner />
    </>
  );
};

export default Home;