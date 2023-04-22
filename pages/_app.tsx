import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "../components/context/DarkModeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

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
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      />

      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
