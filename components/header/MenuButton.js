export default function MenuButton(props) {
  const genericHamburgerLine = `h-0.5 w-4 my-1 rounded-full bg-zinc-500 transition ease transform duration-300 `;

  return (
    <div className="group">
      <div
        className={`${genericHamburgerLine} ${
          props.isMenuToggeld
            ? "translate-y-1.5 rotate-45 opacity-100 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isMenuToggeld
            ? "opacity-0"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isMenuToggeld
            ? "-translate-y-1.5 -rotate-45 opacity-100 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </div>
  );
}
