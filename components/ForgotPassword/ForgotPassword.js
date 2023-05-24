import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import HashLoaderSpinner from "../Loaders/HashLoader";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { FaTelegramPlane } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { RiMailForbidLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

const initialValues = {
  userEmail: "",
  success: "",
  error: "",
};

export default function ForgotPassword() {
  const [user, setUser] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const { userEmail, error, success } = user;
  const forgotPasswordValidation = Yup.object({
    userEmail: Yup.string()
      .required("لطفا ایمیل خود را وارد کنید")
      .email("ایمیل نا معتبر است."),
  });

  const forgotPasswordHandler = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/auth/forgot", {
        email: userEmail,
      });
      setUser((prevState) => ({
        ...prevState,
        error: "",
        success: data.message,
      }));
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
          ایمیلی که باهاش حساب کاربریت رو ساختی وارد کن!
        </p>
        <Formik
          enableReinitialize
          initialValues={{
            userEmail,
          }}
          validationSchema={forgotPasswordValidation}
          onSubmit={() => {
            forgotPasswordHandler();
          }}
        >
          {(form) => (
            <Form className="space-y-3 p-4">
              <Input
                type="text"
                name="userEmail"
                placeholder="ایمیل خود را وارد کنید..."
                value={user.userEmail}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUser((prevState) => ({
                    ...prevState,
                    userEmail: e.target.value,
                  }));
                }}
                icon={
                  <FaTelegramPlane
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
                  ارسال
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
