import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/img/logo.png";
import SocialMedia from "./SocialMedia";
import NewsLetter from "./NewsLetter";

const links = [
  {
    links: [
      {
        name: "درباره ما",
        link: "",
      },
      {
        name: "پشتیبانی",
        link: "",
      },
      {
        name: "مسئولیت اجتماعی",
        link: "",
      },
      {
        name: "شعبه های حضوری",
        link: "",
      },
    ],
  },
  {
    heading: "کمک و پشتیبانی",
    links: [
      {
        name: "اطلاعات مرسوله",
        link: "",
      },
      {
        name: "مرحوعی ها",
        link: "",
      },
      {
        name: "راهنمای ثبت سفارش",
        link: "",
      },
      {
        name: "راهنمای پیگیری بسته پستی",
        link: "",
      },
      {
        name: "راهنمایی اندازه",
        link: "",
      },
    ],
  },
  {
    heading: "خدمات مشتری",
    links: [
      {
        name: "خدمات مشتری",
        link: "",
      },
      {
        name: "شرایط و ضوابط",
        link: "",
      },
      {
        name: "خریدار (انتقال پول)",
        link: "",
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-y-4 space-x-3 sm:space-x-0">
      {links.map((item, index) => {
        return (
          <div className=" sm:pr-24 mx-auto w-full space-y-3" key={index}>
            {index == 0 ? (
              <Image src={Logo} alt="Logo" width={200} />
            ) : (
              <b className="pb-4 text-base md:text-lg font-yekanExtraBold">
                {item.heading}
              </b>
            )}
            <ul className="space-y-1">
              {item.links.map(({ link, name }, index) => (
                <li key={index}>
                  <Link
                    className="hover:underline text-zinc-600 font-yekanMedium text-xs sm:text-sm"
                    href={link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <SocialMedia />
      <NewsLetter />
    </div>
  );
}
