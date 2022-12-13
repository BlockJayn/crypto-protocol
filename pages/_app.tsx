import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  color: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    dark: "#130C30",
    light: "#261A5B",
    lighter: "#4A4072",
    white: "#FFFFFF",
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
