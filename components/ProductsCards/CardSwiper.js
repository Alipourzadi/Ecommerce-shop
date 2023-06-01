import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { useEffect } from "react";
import Image from "next/image";
export default function ProductSwiper({ images }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);
  return (
    <div
      className="relative overflow-hidden h-full w-full rounded-sm"
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.start();
      }}
      onMouseLeave={() => {
        swiperRef.current.swiper.autoplay.stop();
        swiperRef.current.swiper.slideTo(0);
      }}
    >
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 500, stopOnLastSlide: false }}
        speed={500}
        modules={[Autoplay]}
        className="relative h-full w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              className="object-cover h-full "
              src={img.url}
              alt="image"
              fill={true}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
