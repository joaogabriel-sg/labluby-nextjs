import type { AppProps } from "next/app";

import { Layout } from "@components";

import { GlobalStyle } from "@styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
