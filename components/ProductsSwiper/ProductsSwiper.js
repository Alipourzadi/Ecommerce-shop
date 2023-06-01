import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import Image from "next/image";
import dicsountBox from "@/public/img/discount/discount.png";

export default function ProductsSwiper({
  items,
  image,

  accentColor,
  slidesPerView,
  showDetails,
}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="h-full"
        breakpoints={{
          430: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: slidesPerView || 3,
          },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className={`flex flex-col items-start justify-between space-y-1 rounded-sm h-full p-2 gap-2 border ${
              showDetails ? "bg-white" : "bg-transparent"
            } `}
          >
            <Image
              src={item.image}
              alt={item.name}
              className={`rounded-sm w-full object-cover ${
                showDetails ? "h-3/4" : "h-full"
              }`}
              quality={100}
              width={200}
              height={200}
            />
            {showDetails && (
              <div className="flex flex-col items-end justify-center gap-2 h-1/4 text-gray-600">
                <h2
                  style={{ direction: "ltr" }}
                  className="text-left text-sm text-gray-400"
                >
                  {item.name.length > 30
                    ? `${item.name.slice(0, 15)}...`
                    : item.name}
                </h2>
                <span
                  className={`text-gray-400 border text-xs px-2 py-1 rounded-sm`}
                >
                  تومان {item.price}
                </span>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
