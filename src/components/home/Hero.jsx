import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero-slider">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop
      >

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" />
        </SwiperSlide>

      </Swiper>

    </div>
  );
}

export default Hero;