import { Swiper, SwiperSlide } from "swiper/react";
import swiperImage1 from "../../../public/img/swiperImage1.png";
import swiperImage2 from "../../../public/img/swiperImage2.png";
import swiperImage3 from "../../../public/img/swiperImage3.png";
import swiperImage4 from "../../../public/img/swiperImage4.png";
import swiperImage5 from "../../../public/img/swiperImage5.png";
import swiperImage6 from "../../../public/img/swiperImage6.png";
import swiperImage7 from "../../../public/img/swiperImage7.png";
import swiperImage8 from "../../../public/img/swiperImage8.png";
import swiperImage9 from "../../../public/img/swiperImage9.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SwiperContainer() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);

  return (
    <div
      className=" bg-gray-200 rounded-lg shadow-md w-full overflow-hidden"
      onMouseEnter={() => {
        swiperRef.current.swiper.autoplay.stop();
      }}
      onMouseLeave={() => {
        swiperRef.current.swiper.autoplay.start();
      }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        color="#fff"
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full mx-auto"
      >
        <SwiperSlide className="bg-white text-white caret-slate-100">
          <Image
            src={swiperImage1}
            alt="image"
            className="object-cover object-center"
            fill={true}
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage2} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage3} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage4} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage5} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage6} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage7} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage8} alt="image" fill={true} quality={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={swiperImage9} alt="image" fill={true} quality={100} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
