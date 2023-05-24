import Button from "../ui/Button";
import Link from "next/link";
import Input from "../ui/Input";
import { FaTelegramPlane } from "react-icons/fa";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  return (
    <div className="sm:pr-24 mx-auto w-full space-y-3">
      <b className="font-yekanExtraBold text-base md:text-lg">
        دریافت اشتراک خبری
      </b>
      <Formik className="flex gap-1">
        {(form) => (
          <Form className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="ایمیل"
              name="newsLetter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={
                <FaTelegramPlane
                  className="absolute top-3 right-3 text-zinc-400 "
                  size={24}
                />
              }
              className="bg-gray-300 w-fit"
            />
            <Button className="w-fit h-fit px-3 py-2 rounded-full shadow-md font-yekanLight">
              <FiChevronLeft
                className="bg-white ml-4 text-[#5A31F4] rounded-full"
                size={20}
              />
              ارسال
            </Button>
            <p className="text-sm text-zinc-600 font-yekanLight w-full">
              با ارسال ایمیل خود با
              <Link href="" className="text-blue-600 underline w-fit">
                {" "}
                شرایط و ضوابط{" "}
              </Link>
              سایت موافقت کرده اید.
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
