import Link from "next/link";

export default function Header() {
  return (
    <div className="hidden md:block lg:col-span-2 rounded-lg py-1 px-2 ">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            className="text-sm text-white bg-[#5A31F4] px-2 py-1 rounded-lg hover:opacity-70"
            href=""
          >
            لباس ورزشی
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-white bg-[#5A31F4] px-2 py-1 rounded-lg hover:opacity-70"
            href=""
          >
            تابلو نقاشی
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-white bg-[#5A31F4] px-2 py-1 rounded-lg hover:opacity-70"
            href=""
          >
            هندذفری آیفون
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-white bg-[#5A31F4] px-2 py-1 rounded-lg hover:opacity-70"
            href=""
          >
            لوستر مدرن
          </Link>
        </li>
        <li>
          <Link
            className="text-sm text-white bg-[#5A31F4] px-2 py-1 rounded-lg hover:opacity-70"
            href=""
          >
            عینک دودی
          </Link>
        </li>
      </ul>
    </div>
  );
}
