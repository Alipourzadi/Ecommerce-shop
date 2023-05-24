import React, { useRef, useState } from "react";

import { MdFlashOn } from "react-icons/md";
import FlashSwipers from "./FlashSwipers";
import CountDown from "../../countDown/CountDown";

export default function index() {
  return (
    <div className="my-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between  sm:bg-gray-200 min-h-max py-4 sm:px-8 sm:py-4 rounded-lg">
        <div className="flex items-center text-[#5A31F4]">
          <MdFlashOn className="fill-amber-400" size={30} />
          <h3 className="uppercase text-lg font-yekanExtraBold">
            تخیف های استثنایی
          </h3>
        </div>
        <CountDown date={new Date(2023, 6, 8)} />
      </div>
      <div className="py-2">
        <FlashSwipers />
      </div>
    </div>
  );
}
