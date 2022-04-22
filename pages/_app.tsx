import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

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
