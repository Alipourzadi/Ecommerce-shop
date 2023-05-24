import Image from "next/image";
import NavLinks from "./NavLinks";

import Logo from "../../public/img/logo.png";

export default function HamburgerMenu({ isAboveMediumScreen, isMenuToggeld }) {
  return (
    <div>
      {/* Right Side */}

      {!isAboveMediumScreen && isMenuToggeld && (
        <div className="fixed right-0 bottom-0 z-40 bg-zinc-300 origin-right transition-transform delay-200 h-full w-[200px]">
          {/* Menu Items */}
          <div className="ml-[30%] mt-[50%] flex flex-col gap-10 text-xl">
            <ul className="flex flex-col items-end p-4 gap-5">
              <NavLinks className="text-right" />
            </ul>
            <Image alt="logo" src={Logo} />
          </div>
        </div>
      )}
    </div>
  );
}
