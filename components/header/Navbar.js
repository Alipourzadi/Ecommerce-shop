import { useState } from "react";
import Image from "next/image";

import useMediaQuery from "@/hooks/useMediaQuery";
import HamburgerMenu from "./HamburgerMenu";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";

function Navbar({ country }) {
  const [menuIsToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:640px)");

  return (
    <nav>
      <div className="flex justify-between items-center bg-neutral-200 font-byekan">
        <ul>
          <li className="flex justify-center items-center px-3 gap-2">
            <Image
              src={country.flag}
              alt="country-flag"
              className="rounded-full"
              width={20}
              height={20}
            />
            <p className="text-sm">{country.name}/usd</p>
          </li>
        </ul>
        <ul className="flex justify-center items-center px-4">
          {isAboveMediumScreen ? (
            <NavLinks />
          ) : (
            <button
              className={`${
                menuIsToggled
                  ? "z-50 rounded-full px-4 py-3"
                  : "z-50 rounded-full bg-secondary-500 px-4 py-3"
              }`}
              onClick={() => setIsMenuToggled((pervState) => !pervState)}
            >
              <MenuButton isMenuToggeld={menuIsToggled} />
            </button>
          )}
          <HamburgerMenu
            isAboveMediumScreen={isAboveMediumScreen}
            isMenuToggeld={menuIsToggled}
          />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
