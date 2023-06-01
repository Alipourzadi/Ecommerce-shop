import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

export default function ProductPrice({ productPrice }) {
  return (
    <div className="flex items-center justify-end gap-1 w-1/2 text-gray-600 text-sm ">
      <div className="relative group">
        <BsExclamationCircle size={12} />
        <div className="absolute top-5 -right-3 hidden group-hover:block bg-gray-100 shadow-sm p-2 rounded-sm border w-max z-20">
          <span className="absolute -top-2 right-[10px] border-gray-100 border-b-8  border-l-8 border-l-transparent border-r-8 border-r-transparent"></span>
          <p className="text-xs">قیمت ها بر اساس سایز لباس متفاوت است.</p>
        </div>
      </div>
      <div>
        {productPrice.length == 1
          ? `${productPrice[0]} تومان`
          : `${productPrice.at(0)}-${productPrice.at(
              productPrice.length - 1
            )} تومان`}
      </div>
    </div>
  );
}
