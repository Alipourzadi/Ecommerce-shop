import Image from "next/image";

import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import AppLayout from "@/components/Layout/AppLayout";
import forgotPass from "../../public/img/forgot-password.png";

export default function forgot() {
  const countryDetail = {
    // name: country.name,
    name: "Iran",
    // flag: country.flag.emojitwo,
    flag: "",
  };
  return (
    <AppLayout countryDetail={countryDetail}>
      <div
        className="grid gap-14 md:gap-6 px-8 py-14"
        style={{ direction: "rtl" }}
      >
        <div className="flex justify-center items-center">
          <ForgotPassword />
          <Image
            className="hidden -z-10 md:block md:absolute left-4 opacity-20 lg:relative lg:opacity-100 lg:left-0"
            src={forgotPass}
            alt="forgot-password"
            width={500}
          />
        </div>
      </div>
    </AppLayout>
  );
}
