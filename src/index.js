/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

/* Tailwind Css */
import "./tailwind/tailwind.css";


/* Rainbow Kit & Wagmi */
import { ethers, BigNumber } from "ethers";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli,WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


/* Firebase Actions */
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUD--i85Fjk8QcbI5hiYpLWiEYe2HQgPs",
  authDomain: "reactprime505.firebaseapp.com",
  projectId: "reactprime505",
  storageBucket: "reactprime505.appspot.com",
  messagingSenderId: "644173212968",
  appId: "1:644173212968:web:7ddc646d802a0acb4a341d",
  measurementId: "G-8BQX71WXCN",
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { firestore };


/* Wagmi  Chain  Settings */ 

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: " My App",
  chains,
});
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});


/* React DOM  Actions */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

