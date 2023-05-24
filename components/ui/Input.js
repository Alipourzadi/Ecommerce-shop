import { useState } from "react";
import { ErrorMessage, useField } from "formik";

import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Input({
  type,
  value,
  placeholder,
  className,
  ltr,
  icon,
  ...props
}) {
  const [field, meta] = useField(props);

  const [isPassVisible, setIsPassVisible] = useState(false);
  return (
    <div className="space-y-2 w-fit">
      {meta.error && meta.touched && (
        <div className="relative bg-red-300 px-4 py-2 text-center rounded-full text-sm text-white">
          <span className="absolute -bottom-1 left-7 border-red-300 border-t-8  border-l-8 border-l-transparent border-r-8 border-r-transparent"></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
      <div
        className={`relative bg-gray-100 shadow-sm rounded-full ${
          meta.error && meta.touched ? "bg-red-100 animate-vibrate" : ""
        }`}
      >
        {icon}

        <input
          style={ltr && { direction: "ltr" }}
          type={isPassVisible ? "text" : type}
          placeholder={placeholder}
          className={`outline-[#5A31F4] outline-1 border-none pr-10 pl-8 py-3 bg-transparent rounded-full text-gray-500 w-72 lg:w-96 md:w-80 caret-[#5A31F4] placeholder:text-sm placeholder:px-1 ${className}`}
          name={field.name}
          {...field}
          {...props}
        />
        {!isPassVisible && type == "password" && (
          <BsEyeFill
            className="absolute left-4 top-4 cursor-pointer text-zinc-400"
            size={18}
            onClick={() => setIsPassVisible(true)}
          />
        )}
        {isPassVisible && (
          <BsEyeSlashFill
            className="absolute left-4 top-4 cursor-pointer text-zinc-400"
            size={18}
            onClick={() => setIsPassVisible(false)}
          />
        )}
      </div>
    </div>
  );
}
