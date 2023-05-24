import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Button from "../ui/Button";

export default function CategoryItem({ header, items }) {
  const [selectedItem, setSelectedItem] = useState();

  const openModalHandler = (itemIndex) => {
    setSelectedItem(items[itemIndex]);
  };
  const closeModalHandler = () => {
    setSelectedItem(null);
  };
  return (
    <div className="relative border rounded-md px-4 py-3 group shadow-md">
      <div className="flex items-center justify-between">
        <h4>{header}</h4>
        <BsChevronLeft
          size={30}
          className="cursor-pointer transition-all hover:w-20 hover:bg-white hover:fill-[#5a31f4] hover:border hover:border-[#5A31F4] bg-[#5A31F4] rounded-full p-1 fill-white"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 my-2">
        {items.map((item, idx) => (
          <div key={idx} href="">
            <Image
              src={item.image}
              className="rounded-md hover:scale-105 hover:shadow-sm transition-transform delay-75 cursor-pointer"
              alt="product-image"
              width={300}
              height={200}
              onClick={openModalHandler.bind(null, idx)}
            />
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="absolute flex items-center justify-center z-50 w-full h-full backdrop-blur-sm rounded-md top-0 left-0">
          <div className="relative bg-white rounded-md overflow-hidden flex justify-between items-center w-3/4 h-3/5 sm:h-1/2 md:h-2/3  animate-appearance">
            <IoClose
              className="absolute left-1 top-1 bg-[#5A38F4] fill-white rounded-full cursor-pointer"
              size={20}
              onClick={closeModalHandler}
            />
            <div className="relative w-3/4 sm:w-1/2 h-full">
              <Image
                className="absolute object-cover"
                src={selectedItem.image}
                alt="selected-image"
                fill={true}
              />
            </div>
            <div className="flex flex-col items-start justify-between sm:justify-center sm:gap-4 py-8 px-2  sm:p-2 h-full mx-auto sm:h-fit space-y-4 ">
              <div className="flex-1 space-y-2">
                <h4>لباس زنانه مجلسی</h4>
                <p className="text-xs">رنگ بندی فوق العاده با بهترین کیفیت</p>
              </div>
              <Button className="text-sm px-2 py-1 rounded-full">
                <BsChevronLeft />
                مشاهده
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
