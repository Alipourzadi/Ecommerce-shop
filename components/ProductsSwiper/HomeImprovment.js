import { homeImprovSwiper } from "@/data/home";
import ProductsSwiper from "./ProductsSwiper";
import { BsChevronLeft } from "react-icons/bs";

export default function HomeImprovment({ className }) {
  return (
    <div
      className={`my-4 space-y-3 p-4 rounded-sm shadow-md border bg-gradient-to-l ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-yekanBlack text-gray-500">لوازم خانه</h2>
        <BsChevronLeft
          size={35}
          className="fill-gray-400 border rounded-full p-2 cursor-pointer hover:bg-gray-200"
        />
      </div>
      <div className="h-[250px] rounded-sm">
        <ProductsSwiper
          items={homeImprovSwiper}
          image={false}
          slidesPerView={5}
        />
      </div>
    </div>
  );
}
