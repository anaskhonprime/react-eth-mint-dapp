/* eslint-disable */

import React, { useEffect, useState, useRef } from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "./components/animation";
import { header_data } from "./prime";

import { configureChains, mainnet } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import {
  useConnect,
  useAccount,
  usePrepareContractWrite,
  useContractWrite,

} from "wagmi";
import contractInterface from './abi.json'

function Mintable() {


  const {
    connector: activeConnector,
    isConnected,
    address,
    isConnecting,
    isDisconnected,
  } = useAccount();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
 

  const {config} = usePrepareContractWrite({
    addressOrName: "0x62078f64B75F25B986eC53966f59485C2F9844D1",
    contractInterface : contractInterface,
    functionName : 'mint'
  });

  const {write: mint, isSuccess} = useContractWrite(config)

  
  return (
    <div>
      <div>
        <div className="relative md:mt-1 mt-12 px-8 lg:px-1">
          <div className="mx-auto max-w-3xl pt-32 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={300}>
                  <h1 className="text-3xl lg:text-6xl font-extrabold tracking-normal  text-center lg:text-center py-8">
                    {header_data.intro}
                  </h1>
                </Reveal>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={500}>
                  <p className="my-10 text-lg lg:text-xl leading-8 px-3 lg:px-5 text-gray-300  text-center lg:text-center">
                    {header_data.headerText}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row bg-[#ffffff10] rounded-t-3xl justify-center">
          <div className="w-[50%] py-16 ">
            <div className="flex flex-col py-5 px-5">
              <div className="flex items-center justify-center px-2.5 ">
                <div className="flex items-center justify-center">
                  <Reveal
                    keyframes={fadeInDownShorter}
                    duration={1000}
                    delay={700}>
                    <div className="cursor-pointer text-xl font-semibold items-center px-12 py-6 lg:text-5xl text-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Mint Information
                    </div>
                  </Reveal>
                </div>
              </div>
              <div className="pl-12 py-10 opacity-80">
                <Reveal keyframes={fadeInLeft} duration={1000} delay={700}>
                  <div className="px-5 py-5 my-5"></div>

                  <div className="space-y-7 px-5 py-5 my-3">
                    <p className="text-xl font-bold">
                      Mint Price Per Sale : 0.05 ETH
                    </p>
                    <p className="text-xl font-bold">
                      Mint Limit Per Wallet : 100 NFTs
                    </p>
                    <p className="text-xl font-bold">
                      Total Minting Amount : 2880 NFTs
                    </p>
                    <p className="text-xl font-bold">
                      Schedule : 25.01.2025, 02:00 (UTC)
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="flex-1 items-center justify-center">
            <div className="flex flex-col lg:flex-row justify-center space-x lg:space-x-10 items-center mb-5 py-16  ">
              <Reveal keyframes={fadeInDownShorter} duration={1000} delay={700}>
                <div className="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-center ">
                    <img
                      className=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                      src="https://absatzwirtschaft-1cf93.kxcdn.com/wp-content/uploads/2022/05/how-to-nft-c-Adidas-1-1024x676.jpg"
                    />
                  </div>

                  <div className="pb-5 tracking-wide">
                    <div className="flex items-center justify-center mb-12">
                      <ConnectButton
                        label="Connect Wallet"
                        chainStatus="none"
                        showBalance={false}
                      />
                    </div>

                    <div className="flex flex-row items-center justify-center mt-5">
                      <div className="px-3">
                        <p className="border border-white px-5 py-2 text-2xl cursor-pointer rounded-2xl font-bold hover:bg-[#ffffff36] ">
                          +
                        </p>
                      </div>

                      <div className="px-3">
                        <p className="border border-white px-16 py-2 text-2xl rounded-2xl font-bold hover:bg-[#ffffff36] ">
                          1
                        </p>
                      </div>

                      <div className="px-3">
                        <p className="border border-white px-5 py-2 text-2xl rounded-2xl cursor-pointer font-bold hover:bg-[#ffffff36] ">
                          -
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-5">
                      {isConnected && (
                        <button className="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-3 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Mint Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mintable;
