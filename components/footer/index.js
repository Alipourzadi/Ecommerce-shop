import CopyRight from "./CopyRight";
import FooterLinks from "./FooterLinks";
import NewsLetter from "./NewsLetter";
import SocialMedia from "./SocialMedia";

export default function index() {
  return (
    <footer
      className="flex flex-col justify-center items-center space-y-6 p-8 bg-zinc-100 shadow-inner font-byekan w-full"
      style={{ direction: "rtl" }}
    >
      <FooterLinks />
      <CopyRight />
    </footer>
  );
}
