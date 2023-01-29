/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./tailwind/tailwind.css";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli,WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
