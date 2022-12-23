import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { WalletProvider } from "@cosmos-kit/react";

import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as leapWallets } from "@cosmos-kit/leap";

import { SignerOptions } from "@cosmos-kit/core";
import { chains, assets } from "chain-registry";

const colors = {
  color: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    dark: "#130C30",
    light: "#261A5B",
    lighter: "#4A4072",
    white: "#FFFFFF",
    lightblue: "#27A5F3",
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Work Sans, system-ui, sans-serif",
  },
  colors: {
    primary: {
      "50": "#e5e7f9",
      "100": "#bec4ef",
      "200": "#929ce4",
      "300": "#6674d9",
      "400": "#4657d1",
      "500": "#2539c9",
      "600": "#2133c3",
      "700": "#1b2cbc",
      "800": "#1624b5",
      "900": "#0d17a9",
    },
  },
  breakPoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider
        chains={chains}
        assetLists={assets}
        wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
        signerOptions={signerOptions}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}
