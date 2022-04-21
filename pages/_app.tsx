import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link rel="shortcut icon" href="/images/meta-icon.png" />
      </Head> */}
      <link
        href="https://fonts.googleapis.com/css?family=Muli"
        rel="stylesheet"
      />
      <link
        href="http://fonts.cdnfonts.com/css/cerebri-sans"
        rel="stylesheet"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
