import NavbarItem from "./NavbarItem";

import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";

const navItems = [
  {
    navText: "امنیت خرید",
    navIcon: <MdSecurity />,
  },
  {
    navText: "خدمات مشتری",
  },
  {
    navText: "پشتیبانی",
  },
  {
    navText: "علاقه مندی ها",
    navIcon: <BsSuitHeart />,
  },
];

export default function NavLinks({ className }) {
  return (
    <>
      {navItems.map((item, index) => {
        return (
          <NavbarItem
            key={index}
            className={className}
            navText={item.navText}
            navIcon={item.navIcon}
          />
        );
      })}
    </>
  );
}
