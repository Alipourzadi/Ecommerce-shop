import { menuArray } from "@/data/home";
import Link from "next/link";

import {
  GiLargeDress,
  GiClothes,
  Gi3DHammer,
  GiWatch,
  GiRunningShoe,
  GiHeadphones,
  GiHealthCapsule,
  GiSportMedal,
  GiBigDiamondRing,
} from "react-icons/gi";
import { MdOutlineSportsEsports, MdOutlineSmartToy } from "react-icons/md";
import { BiCameraMovie, BiGift, BiCategory } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";

export default function Menu() {
  return (
    <div className="sm:row-span-2 md:row-span-3 lg:row-span-3 bg-gray-200 text-gray-600 rounded-lg shadow-md h-fit sm:h-full overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-rounded-3xl scrollbar-thumb-rounded-lg  scrollbar-w-[1px] scrollbar-h-1 scrollbar-corner-rounded-3xl scrollbar-thumb-[#5A31F4] scrollbar-track-transparent ">
      <div className="hidden sm:flex items-center gap-2 bg-[#5A31F4] text-gray-200 px-3 py-[6px]">
        <BiCategory size={28} />
        <h2 className="font-yekanExtraBold text-sm lg:text-base">
          دسته بندی ها
        </h2>
      </div>
      <ul className="flex items-center sm:flex-col sm:items-start w-full">
        {menuArray.map((item, idx) => (
          <li className="flex items-center justify-center w-full" key={idx}>
            <Link
              className="flex flex-col sm:flex-row justify-center items-center  gap-2 px-3 py-1  hover:bg-[#5A31F430] hover:shadow-md w-full transition-colors"
              href={item.link}
            >
              {idx == 0 ? (
                <GiLargeDress size={28} />
              ) : idx == 1 ? (
                <GiClothes size={28} />
              ) : idx == 2 ? (
                <GiHeadphones size={28} />
              ) : idx == 3 ? (
                <GiWatch size={28} />
              ) : idx == 4 ? (
                <HiOutlineHome size={28} />
              ) : idx == 5 ? (
                <GiHealthCapsule size={28} />
              ) : idx == 6 ? (
                <GiRunningShoe size={28} />
              ) : idx == 7 ? (
                <GiBigDiamondRing size={28} />
              ) : idx == 8 ? (
                <GiSportMedal size={28} />
              ) : idx == 9 ? (
                <FaBaby size={28} />
              ) : idx == 10 ? (
                <BiCameraMovie size={28} />
              ) : idx == 11 ? (
                <MdOutlineSportsEsports size={28} />
              ) : idx == 12 ? (
                <BsPhoneVibrate size={28} />
              ) : idx == 13 ? (
                <MdOutlineSmartToy size={28} />
              ) : idx == 14 ? (
                <BiGift size={28} />
              ) : idx == 15 ? (
                <Gi3DHammer size={28} />
              ) : idx == 16 ? (
                <AiOutlineSecurityScan size={28} />
              ) : (
                ""
              )}
              <span className="hidden text-xs sm:block font-yekanMedium w-full">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
