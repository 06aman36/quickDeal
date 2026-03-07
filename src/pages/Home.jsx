import Categories from "../components/home/Categories"
import OfferBanner from "../components/home/OfferBanner"
import ProductGrid from "../components/products/productGrid"
import Hero from "../../src/components/home/Hero"


function Home() {

  return (

    <>
      <Hero />

      <Categories />

      <ProductGrid />

      <OfferBanner />
    </>

  )

}

export default Home