import { HashLoader } from "react-spinners";

export default function HashLoaderSpinner({ loading }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 grid justify-center items-center h-screen backdrop-blur-md">
      <div className="flex flex-col items-center gap-4  p-4 rounded-3xl">
        <HashLoader loading={loading} color="#5A31F4" />
        <p className="font-yekanBold text-gray-600">درحال ارسال درخواست ...</p>
      </div>
    </div>
  );
}
