import "../styles/vars/box.css";
import "../styles/vars/borders.css";
import "../styles/vars/colors.css";
import "../styles/globals.css";
import "antd/dist/antd.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>edcilo.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
