import Image from "next/image";

import { MdLocationPin } from "react-icons/md";
import Logo from "../../public/img/logo.png";

export default function CopyRight() {
  return (
    <div className="text-center font-yekanLight text-xs">
      <div className="flex item-center justify-center gap-2">
        <MdLocationPin />
        <p className="">تهران، خیابان انقلاب،کارگر شمالی ، کوچه مروت، پلاک 6</p>
      </div>
      <p className="text-sm sm:text-base">
        تمام حقوق این وبسایت متعلق به شرکت{" "}
        <span>
          <Image src={Logo} alt="logo" width={75} className="inline-block" />
        </span>{" "}
        میباشد.
      </p>
    </div>
  );
}
