export default function Button({ flat, type, children, onClick, className }) {
  const style = `${
    flat
      ? "text-zinc-800 text-lg hover:text-[#5A31f4] hover:opacity-80"
      : "bg-[#5A31F4]  hover:opacity-80 text-white shadow-sm"
  }`;
  return (
    <button
      type={type}
      className={`flex items-center justify-center ${style} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
