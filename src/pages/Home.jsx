import Categories from "../components/home/Categories"
import OfferBanner from "../components/home/OfferBanner"
import ProductGrid from "../components/products/productGrid"
import Hero from "../components/home/hero"


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