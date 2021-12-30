import { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import { Layout } from "@components";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
