import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SwiperCard from "./SwiperCard";
import { flashDealsArray } from "@/data/home";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[250px] p-4"
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          680: {
            slidesPerView: 4,
          },
          880: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {flashDealsArray.map((product, idx) => (
          <SwiperSlide key={idx}>
            <SwiperCard
              image={product.image}
              price={product.price}
              discount={product.discount}
              link={product.link}
              sold={product.sold}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
