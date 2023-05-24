import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdFlashOn } from "react-icons/md";

export default function SwiperCard({ image, price, discount, sold, link }) {
  return (
    <div>
      <div className="flex flex-col group rounded-lg overflow-hidden">
        <div>
          <Link className="overflow-hidden" href={link}>
            <div className="absolute w-0 h-full opacity-0 rounded-lg top-0 left-0 bg-black/40 translate-y-full group-hover:translate-y-0 group-hover:w-full group-hover:opacity-100 transition-all  delay-150"></div>
            <Image
              src={image}
              alt="product-image"
              className="-z-10 rounded-lg"
              fill={true}
            />
          </Link>
          <div className="absolute left-0 top-0 bg-[#5A31F4] px-1 py-1 rounded-tl-lg rounded-br-lg">
            <MdFlashOn className="fill-amber-400" size={25} />
            <span className="text-white text-sm">-{discount}%</span>
          </div>
        </div>
        <div className="absolute flex opacity-0 flex-col group-hover:opacity-100 transition-all delay-300 items-end justify-end left-1/2 top-1/2  -translate-x-1/2 gap-1 px-2  text-white w-full">
          <div className="flex items-center gap-4">
            <span className="text-sm line-through">
              -{(price - (price - price / discount)).toFixed(2)}$
            </span>
            <span className="text-amber-400 rounded-lg text-sm">
              تومان {(price - price / discount).toFixed(2)}$
            </span>
          </div>

          <div className="flex justify-end  w-full h-2 bg-zinc-300 rounded-full">
            <div
              className="h-full bg-[#5A31F4] rounded-full"
              style={{ width: `${sold}%` }}
            ></div>
          </div>
          <div className="text-xs text-right">
            {sold}% از این کالا به فروش رسیده!!{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
