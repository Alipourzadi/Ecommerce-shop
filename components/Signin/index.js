import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import Input from "../ui/Input";
import Button from "../ui/Button";
import HashLoaderSpinner from "../Loaders/HashLoader";

import { FiChevronLeft } from "react-icons/fi";
import {
  HiLockClosed,
  HiOutlineShieldExclamation,
  HiUser,
} from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { RiMailForbidLine } from "react-icons/ri";

const initialValue = {
  signinUsername: "",
  signinEmail: "",
  signinPassword: "",
  signinConfirmPassword: "",
  success: "",
  error: "",
};

export default function Signin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(initialValue);
  const {
    signinUsername,
    signinEmail,
    signinPassword,
    signinConfirmPassword,
    error,
    success,
  } = user;

  const signinValidation = Yup.object({
    signinUsername: Yup.string()
      .required("لطفاً نام کاربری خود را وارد کنید!")
      .min(4)
      .max(10),
    signinEmail: Yup.string()
      .email("ایمیل وارد شده نا معتبر است!")
      .required("ایمیل خود را وارد کنید!"),
    signinPassword: Yup.string()
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.#%*?&])[A-Za-z\d@$!%*.#?&]{8,}/,
        "رمز عبور نامعتبر است. "
      )
      .required("برای حساب کاربری خود رمز بگزارید."),
    signinConfirmPassword: Yup.string()
      .oneOf([Yup.ref("signinPassword")], "رمز عبور باید یکسان باشد.")
      .required("لطفا رمز عبورت خود تکرار کنید!"),
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((pervState) => ({ ...pervState, [name]: value }));
  };

  const signinHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name: signinUsername,
        email: signinEmail,
        password: signinPassword,
      });
      setUser((pervState) => ({
        ...pervState,
        error: "",
        success: data.message,
      }));
      setIsLoading(false);
      setTimeout(async () => {
        const options = {
          redirect: false,
          email: signinEmail,
          password: signinPassword,
        };
        const res = await signIn("credentials", options);
        router.push("/");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setUser((pervState) => ({
        ...pervState,
        success: "",
        error: error.response.data.message,
      }));
    }
  };

  return (
    <>
      {isLoading && <HashLoaderSpinner loading={isLoading} />}
      <div className="grid justify-center">
        <div className="flex items-center gap-2 px-4 sm:px-0">
          <FiChevronLeft
            className="border-2 border-[#5A31F4] rounded-full"
            size={20}
          />
          <h2 className="text-2xl font-yekanExtraBold text-gray-500">
            ثبت نام{" "}
          </h2>
        </div>
        <p className="text-sm font-yekanLight mt-2">
          اطلاعات خودت رو وارد کن تا به جمع بزرگ ما اضافه بشی...
        </p>
        <div className="flex flex-col w-full">
          <Formik
            enableReinitialize
            initialValues={{
              signinUsername,
              signinEmail,
              signinPassword,
              signinConfirmPassword,
            }}
            validationSchema={signinValidation}
            onSubmit={() => {
              signinHandler();
            }}
          >
            {(form) => (
              <Form className="space-y-3 p-4">
                <Input
                  type="text"
                  placeholder="نام کاربری خود را وارد کنید"
                  name="signinUsername"
                  value={user.signinUsername}
                  onChange={inputChangeHandler}
                  icon={
                    <HiUser
                      className="absolute top-3 right-3 text-zinc-400"
                      size={24}
                    />
                  }
                />
                <Input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  ltr={true}
                  name="signinEmail"
                  value={user.signinEmail}
                  onChange={inputChangeHandler}
                  className={"placeholder:text-right"}
                  icon={
                    <FaTelegramPlane
                      className="absolute top-3 right-3 text-zinc-400"
                      size={24}
                    />
                  }
                />
                <Input
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  name="signinPassword"
                  value={user.signinPassword}
                  onChange={inputChangeHandler}
                  className={"placeholder:text-right"}
                  icon={
                    <HiLockClosed
                      className="absolute top-3 right-3 text-zinc-400"
                      size={24}
                    />
                  }
                />
                <Input
                  type="password"
                  placeholder="رمز عبور خود را تکرار کنید"
                  name="signinConfirmPassword"
                  value={user.signinConfirmPassword}
                  onChange={inputChangeHandler}
                  className={"placeholder:text-right"}
                  icon={
                    <HiLockClosed
                      className="absolute top-3 right-3 text-zinc-400"
                      size={24}
                    />
                  }
                />
                <div className="flex items-center justify-between">
                  <div></div>
                  <Button
                    className={"px-4 py-2 rounded-3xl w-max"}
                    type="submit"
                  >
                    <FiChevronLeft
                      className="bg-white ml-4 text-[#5A31F4] rounded-full"
                      size={24}
                    />
                    ثبت نام
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          {error && (
            <div className="flex items-center justify-center gap-2 mx-auto bg-red-500 text-white rounded-full shadow-sm py-2 px-4 text-sm w-max h-full">
              <RiMailForbidLine size={18} />
              {error}
            </div>
          )}
          {success && (
            <div className="flex items-center justify-center gap-2 mx-auto bg-green-400 text-white rounded-full shadow-sm py-2 px-4 text-sm w-max">
              <MdOutlineDone size={18} />
              {success}
            </div>
          )}

          <div className="flex gap-2 mx-auto my-4">
            <HiOutlineShieldExclamation size={18} />
            <p className="text-xs  font-yekanLight text-black w-72 lg:w-96 sm:w-80">
              رمز عبور باید حداقل 8 کاراکتر،حداقل شامل یک حرف بزرگ و حداقل یک
              حرف کوچک و حداقل یک عدد و همچینین باید شامل حداقل یک کاراکتر ویژه
              مانند #@!$&? باشد.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
