import type { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "@components";

import { NotificationProvider } from "@store/NotificationContext";

import { GlobalStyle } from "@styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
