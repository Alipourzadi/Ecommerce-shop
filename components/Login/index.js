import { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

import Input from "../ui/Input";
import Button from "../ui/Button";
import HashLoaderSpinner from "../Loaders/HashLoader";

import { FiChevronLeft } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

const initialValues = {
  loginEmail: "",
  loginPassword: "",
  success: "",
  error: "",
};

export default function Login({ providers, csrfToken, callbackUrl }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(initialValues);
  const { loginEmail, loginPassword, error } = user;

  const loginValidation = Yup.object({
    loginEmail: Yup.string()
      .required("لطفا ایمیل خود را وارد کنید")
      .email("ایمیل نا معتبر است."),
    loginPassword: Yup.string()
      .required("رمز عبور خود را وارد کنید")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.#%*?&])[A-Za-z\d@$!%*.#?&]{8,}/,
        "رمز عبور نامعتبر است. "
      ),
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((pervState) => ({ ...pervState, [name]: value }));
  };

  const loginHandler = async () => {
    setIsLoading(true);
    const options = {
      redirect: false,
      email: loginEmail,
      password: loginPassword,
    };
    const res = await signIn("credentials", options);
    setUser((prevState) => ({ ...prevState, error: "", success: "" }));
    if (res?.error) {
      setIsLoading(false);
      setUser((pervState) => ({ ...pervState, error: res.error }));
    } else {
      router.push(callbackUrl || "/");
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
            ورود به حساب کاربری{" "}
          </h2>
        </div>
        <p className="text-sm font-yekanLight mt-2">
          با وارد کردن ایمیل و رمز خود وارد حساب کاربری خودت شو!
        </p>
        <Formik
          enableReinitialize
          initialValues={{
            loginEmail,
            loginPassword,
          }}
          validationSchema={loginValidation}
          onSubmit={() => {
            loginHandler();
          }}
        >
          {(form) => (
            <Form
              className="space-y-3 p-4"
              method="post"
              action="/api/auth/signin/email"
            >
              <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
              <Input
                type="text"
                name="loginEmail"
                placeholder="نام کاربری"
                value={user.loginEmail}
                onChange={inputChangeHandler}
                icon={
                  <FaTelegramPlane
                    className="absolute top-3 right-3 text-zinc-400"
                    size={24}
                  />
                }
              />
              <Input
                type="password"
                name="loginPassword"
                placeholder="رمز عبور"
                onChange={inputChangeHandler}
                value={user.loginPassword}
                className={"placeholder:text-right"}
                icon={
                  <HiLockClosed
                    className="absolute top-3 right-3 text-zinc-400"
                    size={24}
                  />
                }
              />
              <div className="flex items-center justify-between">
                <Link
                  href="/auth/forgot"
                  className="text-gray-300 text-sm font-yekanLight hover:text-blue-300 hover:underline"
                >
                  رمز عبورت رو فراموش کردی؟
                </Link>
                <Button className={"px-4 py-2 rounded-3xl"} type="submit">
                  <FiChevronLeft
                    className="bg-white ml-4 text-[#5A31F4] rounded-full"
                    size={20}
                  />
                  ورود
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {error && <div>{error}</div>}
        <div className="relative w-full h-[1px] bg-gray-200 my-4">
          <p className="absolute left-40 -top-2 text-xs bg-white max-w-max">
            یا از طریق زیر...
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          {providers.map((provider) => {
            if (provider.name == "Credentials") return;
            return (
              <Button
                key={provider.id}
                className="gap-10 w-5/6 py-2  border rounded-full hover:bg-zinc-500/10"
                flat={true}
                onClick={() => signIn(provider.id)}
              >
                <Image
                  src={`/../public/icons/${provider.id}.png`}
                  alt={provider.id}
                  width={40}
                  height={40}
                />
                <p>ورود با {provider.name}</p>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
