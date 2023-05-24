import { signOut, signIn } from "next-auth/react";

import Button from "../ui/Button";
import Image from "next/image";

import { FiChevronLeft } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdExitToApp, MdOutlineDirections } from "react-icons/md";

function DropDown({ session }) {
  return (
    <div className="absolute left-0 top-6 px-4 py-2 w-56 z-50 bg-white backdrop-blur-lg shadow-md rounded-md font-yekanLight cursor-default">
      {session && (
        <div className="text-center text-zinc-600">
          <div className="flex items-center justify-center gap-2 my-2">
            <Image
              src={session.user.image}
              alt="user-image"
              width={90}
              height={90}
              className="rounded-full border"
            />
            <div className="flex flex-col items-end justify-center">
              <h1 className="text-lg font-semibold">خوش اومدی</h1>
              <p>{session.user.name}</p>
              <Button
                innerText="خروج"
                onClick={() => signOut()}
                className="w-full rounded-md p-1"
              />
            </div>
          </div>
          <ul className="text-right space-y-1">
            <li className="flex w-full justify-between items-center border-b-[1px] py-2 hover:text-zinc-500">
              <div className="flex items-center gap-4">
                <FiChevronLeft size={25} />
                <p>{session.user.name}</p>
              </div>
              <CgProfile size={25} />
            </li>
            <li className="flex justify-between items-center gap-4 border-b-[1px] py-2 hover:text-zinc-500">
              <HiOutlineShoppingBag size={25} />
              <p>سفارش ها</p>
            </li>
            <li className="flex justify-between items-center gap-4 border-b-[1px] py-2 hover:text-zinc-500">
              <AiOutlineHeart size={25} />
              <p>لیست ها</p>
            </li>
            <li className="flex justify-between items-center gap-4 border-b-[1px] py-2 hover:text-zinc-500">
              <MdOutlineDirections size={25} />
              <p>آدرس ها</p>
            </li>
            <li
              className="flex justify-between items-center gap-4 py-2 hover:text-zinc-500"
              onClick={() => signOut()}
            >
              <MdExitToApp size={25} />
              <p>خروج از حساب کاربری</p>
            </li>
          </ul>
        </div>
      )}
      {!session && (
        <div>
          <div className="text-center space-y-3">
            <h1 className="text-base font-yekanMedium text-zinc-800">
              !به شاپ آی آر خوش اومدی
            </h1>
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <Button
                onClick={() => signIn()}
                className="px-4 py-2 w-full font-yekanBold rounded-lg"
              >
                ورود به حساب کاربری
              </Button>
              <Button
                flat={true}
                onClick={() => signIn()}
                className="px-4 py-2 rounded-lg font-yekanBold bg-zinc-200 w-full"
              >
                ثبت نام
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
