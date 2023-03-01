import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { theme } from "@/styles/extendedTheme";
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
           <Analytics />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
