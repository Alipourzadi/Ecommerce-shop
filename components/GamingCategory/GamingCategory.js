import { gamingSwiper } from "@/data/home";
import Image from "next/image";
import Button from "../ui/Button";
import { BsChevronLeft } from "react-icons/bs";

export default function GamingCategory() {
  return (
    <div className="h-[400px] bg-[url('/img/Gaming/gaming.jpg')] bg-cover bg-top rounded-xl grid grid-cols-[1fr_2fr] gap-2 p-4">
      <div className="flex flex-col justify-center items-center  h-full p-4 rounded-xl backdrop-blur-md space-y-4">
        <h2 className="text-2xl text-white drop-shadow-2xl font-yekanExtraBlack">
          محصولات گیمینگ
        </h2>
        <div className="text-center">
          <p className="font-yekanLight text-lg text-white">
            جدید ترین محصولات کامپیوتری و گیمینگ رو میتونی توی لینک زیر ببینی...
          </p>
        </div>
        <Button className="p-2 rounded-md bg-purple-900 border border-white">
          مشاهده
          <BsChevronLeft />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {gamingSwiper.map((item, idx) => (
          <div
            className="relative shadow-2xl hover:-translate-y-2 transition-transform"
            key={idx}
          >
            <Image
              className="rounded-xl object-cover cursor-pointer"
              src={item.image}
              alt={item.name}
              fill={true}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
