import { useState } from "react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import DropDown from "./DropDown";

import { FiChevronDown, FiSearch } from "react-icons/fi";
import Logo from "../../public/img/logo.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import Input from "../ui/Input";

export default function SearchBar() {
  const [isVissible, setIsVissible] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex justify-between items-center w-full gap-1 py-3 shadow-md">
      <ul className="flex justify-center items-center px-1 py-2 ml-4 bg-[#5A31F4] text-white rounded-md">
        <li className="border-r-[1px] px-1 border-r-white hover:text-zinc-200 transition-colors cursor-pointer">
          <RiShoppingCart2Line size={25} />
        </li>
        <li
          className="relative flex justify-center items-center px-1 hover:text-zinc-200 transition-colors cursor-pointer"
          onMouseEnter={() => setIsVissible((pervState) => (pervState = true))}
          onMouseLeave={() => setIsVissible((pervState) => (pervState = false))}
        >
          {!session && <BiUser size={25} />}
          {session && (
            <Image
              src={session.user.image}
              alt="user-image"
              width={25}
              height={25}
              className="rounded-full"
            />
          )}
          <FiChevronDown size={18} />
          {isVissible && <DropDown session={session} />}
        </li>
      </ul>
      <div className="flex justify-center items-center gap-2 px-4 w-full md:w-1/2">
        <div className="flex items-center justify-center h-10 w-full  bg-zinc-100 py-2 pr-4 rounded-md shadow-md shadow-zinc-200 relative">
          <div className="bg-[#5A31F4] h-10 w-10 flex justify-center items-center rounded-l-md text-white hover:opacity-80 cursor-pointer">
            <FiSearch className="text-base" />
          </div>
          <input
            type="text"
            placeholder="...جست و جو"
            className="bg-transparent font-yekanLight outline-none w-full text-sm text-right placeholder:text-right text-black/80"
          />
        </div>
        <Image
          src={Logo}
          className="hidden sm:block"
          alt="shop-pay"
          width={150}
        />
      </div>
    </div>
  );
}
