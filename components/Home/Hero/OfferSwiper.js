import { Swiper, SwiperSlide } from "swiper/react";
import offerImage1 from "../../../public/img/offer/offerImage1.webp";
import offerImage2 from "../../../public/img/offer/offerImage2.webp";
import offerImage3 from "../../../public/img/offer/offerImage3.webp";
import offerImage4 from "../../../public/img/offer/offerImage4.webp";
import offerImage5 from "../../../public/img/offer/offerImage5.webp";
import offerImage6 from "../../../public/img/offer/offerImage6.webp";
import offerImage7 from "../../../public/img/offer/offerImage7.webp";
import offerImage8 from "../../../public/img/offer/offerImage8.webp";

const offeredProducts = [
  {
    image: offerImage1,
    discount: 17,
  },
  {
    image: offerImage2,
    discount: 17,
  },
  {
    image: offerImage3,
    discount: 17,
  },
  {
    image: offerImage4,
    discount: 17,
  },
  {
    image: offerImage5,
    discount: 17,
  },
  {
    image: offerImage6,
    discount: 17,
  },
  {
    image: offerImage7,
    discount: 17,
  },
  {
    image: offerImage8,
    discount: 17,
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function OfferSwiper() {
  const isAboveSmallScreen = useMediaQuery("(min-width:640px)");
  const isAboveLargeScreen = useMediaQuery("(min-width:1024px)");
  return (
    <div className="bg-gray-200 rounded-lg shadow-md bg-[url('/img/offers.png')] bg-left bg-cover md:bg-center   bg-no-repeat overflow-hidden p-2">
      <Swiper
        slidesPerView={isAboveLargeScreen ? 4 : isAboveSmallScreen ? 4 : 3}
        spaceBetween={isAboveSmallScreen ? 10 : 10}
        pagination={false}
        modules={[Pagination]}
        className="max-w-sm md:max-w-lg z-20  h-[100%] sm:h-[90%] md:left-[0%] xl:left-[13%]  sm:my-2 "
      >
        {offeredProducts.map((product, idx) => (
          <SwiperSlide
            key={idx}
            className="relative group  cursor-pointer w-full"
          >
            <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:animate-pulse"></div>
            <Image
              className="rounded-full p-1 object-cover"
              src={product.image}
              alt="Offer 1"
              fill={true}
              quality={100}
            />
            <span className="absolute right-0 top-0 bg-gradient-to-r from-violet-500 via-red-500 to-yellow-500 text-white text-xs font-yekanBold shadow-inner rounded-full px-1 py-2">
              -{product.discount}%
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
