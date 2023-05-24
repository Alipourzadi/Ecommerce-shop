import { getCsrfToken, getProviders, getSession } from "next-auth/react";

import AppLayout from "@/components/Layout/AppLayout";
import Login from "@/components/Login";
import Signin from "@/components/Signin";

export default function signin({ providers, csrfToken, callbackUrl }) {
  const countryDetail = {
    // name: country.name,
    name: "Iran",
    // flag: country.flag.emojitwo,
    flag: "",
  };
  return (
    <AppLayout countryDetail={countryDetail}>
      <div
        className="flex flex-col w-full justify-center items-center md:items-start md:justify-start mx-auto md:px-8 py-8"
        style={{ direction: "rtl" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full justify-center items-center md:items-start md:justify-start mx-auto md:px-10 py-6">
          <Login
            providers={providers}
            callbackUrl={callbackUrl}
            csrfToken={csrfToken}
          />
          <Signin />
        </div>
      </div>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const { callbackUrl } = query;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
      },
    };
  }
  const csrfToken = await getCsrfToken(context);
  const providers = Object.values(await getProviders());

  return {
    props: { providers, csrfToken, callbackUrl },
  };
}
