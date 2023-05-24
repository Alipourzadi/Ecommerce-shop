import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { signIn } from "next-auth/react";

import Input from "../ui/Input";
import Button from "../ui/Button";
import HashLoaderSpinner from "../Loaders/HashLoader";

import { RiMailForbidLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { FiChevronLeft } from "react-icons/fi";

const initialValues = {
  resetPassword: "",
  confirmResetPassword: "",
  success: "",
  error: "",
};

export default function ResetPassword({ userId }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(initialValues);

  const { resetPassword, confirmResetPassword, success, error } = user;

  const forgotPasswordValidation = Yup.object({
    resetPassword: Yup.string()
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.#%*?&])[A-Za-z\d@$!%*.#?&]{8,}/,
        "رمز عبور نامعتبر است. "
      )
      .required("برای حساب کاربری خود رمز بگزارید."),
    confirmResetPassword: Yup.string()
      .oneOf([Yup.ref("resetPassword")], "رمز عبور باید یکسان باشد.")
      .required("لطفا رمز عبورت خود تکرار کنید!"),
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const forgotPasswordHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.put("/api/auth/reset", {
        id: userId,
        password: resetPassword,
      });
      const options = {
        redirect: false,
        email: data.email,
        password: resetPassword,
      };
      await signIn("credentials", options);
      router.push("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setUser((prevState) => ({
        ...prevState,
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
            className="border border-[#5A31F4] rounded-full"
            size={20}
          />
          <h2 className="text-2xl font-yekanExtraBold text-gray-500">
            فراموشی رمز عبور{" "}
          </h2>
        </div>
        <p className="text-sm font-yekanLight mt-2">
          رمز عبور جدید خودت رو وارد کن...
        </p>
        <Formik
          enableReinitialize
          initialValues={{
            resetPassword,
            confirmResetPassword,
          }}
          validationSchema={forgotPasswordValidation}
          onSubmit={() => {
            forgotPasswordHandler();
          }}
        >
          {(form) => (
            <Form className="space-y-3 p-4">
              <Input
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                name="resetPassword"
                value={user.resetPassword}
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
                name="confirmResetPassword"
                value={user.confirmResetPassword}
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
                <Button className={"px-4 py-2 rounded-3xl"} type="submit">
                  <FiChevronLeft
                    className="bg-white ml-4 text-[#5A31F4] rounded-full"
                    size={20}
                  />
                  تایید
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
      </div>
    </>
  );
}
