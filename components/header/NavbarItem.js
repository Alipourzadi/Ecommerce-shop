export default function NavbarItem({ navText, navIcon, className }) {
  return (
    <li
      className={`${className} text-right flex justify-center items-center gap-1 px-2 text-xs border-r-2 border-r-zinc-300 last-of-type:border-r-0 box-border cursor-pointer hover:text-zinc-500 md:flex font-yekanLight`}
    >
      {navIcon}
      <span>{navText}</span>
    </li>
  );
}
