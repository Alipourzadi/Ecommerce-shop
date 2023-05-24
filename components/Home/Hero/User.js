import React, { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import UserSwiper from "./UserSwiper";

export default function User() {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:block row-span-2 rounded-lg shadow-md bg-gradient-to-t to-[#5A31F4] from-gray-200 overflow-hidden">
      <div className="flex flex-col items-center gap-2">
        {session ? (
          <div className="text-center">
            <Image
              src={session.user.image}
              alt="user-image"
              width={100}
              height={100}
            />
            <h2 className="text-lg font-yekanExtraBlack text-white">
              {session.user.name}
            </h2>
          </div>
        ) : (
          <div className="text-center">
            <Image
              src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png"
              alt="user-image"
              width={100}
              height={100}
            />
            <div className="flex  gap-2">
              <Button className="w-full rounded-lg py-1">ورود</Button>
              <Button flat className="w-full rounded-lg py-1 text-sm">
                ثبت نام
              </Button>
            </div>
          </div>
        )}
        <ul className="flex items-center justify-center gap-1">
          <li className="hover:bg-[#5A31F4] rounded-full p-2 cursor-pointer hover:shadow-xl transition-colors">
            <Link legacyBehavior href="/profile">
              <IoSettingsOutline size={24} className=" stroke-white" />
            </Link>
          </li>
          <li className="hover:bg-[#5A31F4] rounded-full p-2 cursor-pointer hover:shadow-xl transition-colors">
            <Link legacyBehavior href="">
              <HiOutlineClipboardList size={24} className="stroke-white" />
            </Link>
          </li>
          <li className="hover:bg-[#5A31F4] rounded-full p-2 cursor-pointer hover:shadow-xl transition-colors">
            <Link legacyBehavior href="">
              <AiOutlineMessage size={24} className="fill-white" />
            </Link>
          </li>
          <li className="hover:bg-[#5A31F4] rounded-full p-2 cursor-pointer hover:shadow-xl transition-colors">
            <Link legacyBehavior href="">
              <BsHeart size={24} className="fill-white " />
            </Link>
          </li>
        </ul>
        <div className="w-2/3 h-56">
          <UserSwiper />
        </div>
      </div>
    </div>
  );
}
