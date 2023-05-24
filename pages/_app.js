import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

import store from "../store/store";
import Head from "next/head";

const persistor = persistStore(store);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Shopir</title>
        <meta
          name="description"
          content="فروشگاه اینترنتی شاپ آی آر - خرید اینترنتی - خرید "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
