import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination } from "swiper";
import { userSwiperArray } from "@/data/home";
import Image from "next/image";

export default function UserSwiper() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCards, Pagination]}
        className="h-full w-full"
      >
        {userSwiperArray.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item.image}
              className="object-cover h-full w-full rounded-lg shadow-lg"
              alt={`product-image`}
              fill={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
