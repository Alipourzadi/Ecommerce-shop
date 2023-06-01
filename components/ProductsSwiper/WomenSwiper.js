import { women_swiper } from "@/data/home";
import ProductsSwiper from "./ProductsSwiper";
import { BsChevronLeft } from "react-icons/bs";

export default function WomenSwiper({ className }) {
  return (
    <div
      className={`my-4 space-y-3 p-4 rounded-sm shadow-sm border bg-gradient-to-l ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-yekanBlack text-violet-500">لباس زنانه</h2>
        <BsChevronLeft
          size={35}
          className="fill-gray-400 border rounded-full p-2 cursor-pointer hover:bg-violet-200 hover:fill-white"
        />
      </div>
      <div className="h-[300px] rounded-sm">
        <ProductsSwiper
          items={women_swiper}
          showDetails={true}
          accentColor={"bg-violet-500"}
          slidesPerView={5}
        />
      </div>
    </div>
  );
}
