import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation } from "swiper";
import Image from "next/image";
import dicsountBox from "@/public/img/discount/discount.png";
import { women_swiper } from "@/data/home";

export default function ProductsSwiper() {
  return (
    <div className="flex items-center h-[400px] rounded-sm bg-gradient-to-l from-[#a492dc] via-[#a492dc] to-[#b7b1cc]  my-4 p-4 ">
      <Image
        src={dicsountBox}
        alt=""
        className="hidden lg:block drop-shadow-2xl"
        quality={100}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={true}
        modules={[FreeMode, Navigation]}
        className="h-full"
        breakpoints={{
          430: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 3,
          },
        }}
      >
        {women_swiper.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col items-start justify-between rounded-sm h-full p-2 gap-2 bg-white"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-sm w-full h-3/4 object-cover"
              width={200}
              height={200}
            />
            <div className="flex flex-col items-end justify-between h-1/4 text-gray-600">
              <h2 style={{ direction: "ltr" }} className="text-left text-sm">
                {item.name.length > 35
                  ? `${item.name.slice(0, 50)}...`
                  : item.name}
              </h2>
              <p className="text-white px-2 rounded-sm bg-[#a492dc]">
                تومان {item.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
