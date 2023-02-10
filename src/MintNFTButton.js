/* eslint-disable */

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { ethers, BigNumber } from "ethers";

import { Button } from "@chakra-ui/react";

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";

const NFTAddress = "0x1BE3FC4F064c7e47A47a3cdb584dDDD00E907EE2";
import abiFile from "./abi.json";


export function MintNFTButton({ quantity, abi, contractAddress }) {
  
  const [mintPrice, setmintPrice] = useState(0);

    const contractConfig = {
      address: NFTAddress,
      abi: abiFile,
    };


  const { data: totalMintData, error: totalMintError } = useContractRead({
    ...contractConfig,
    functionName: "mintPrice",
  });

   useEffect(() => {
     if (totalMintData) {
       let temp = totalMintData;
       setmintPrice(temp / 10 ** 18);
     }
   }, [totalMintData]);

  
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "mint",
    args: [
      BigNumber.from(quantity),
      {
        value: ethers.utils.parseEther((mintPrice * quantity).toString()),
      },
    ],  
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className="inline-flex cursor-pointer items-center ml-2 my-5 px-24 py-3 text-sm lg:text-xl text-medium font-bold text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={!write || isLoading}
          onClick={() => write()}>
          {isLoading ? "Mint is Processing ... " : "Mint Now"}
        </button>
      </div>

      {isSuccess && (
        <div className="flex flex-row items-center justify-evenly">
          <div className="inline-flex cursor-pointer items-center ml-2 my-5 px-5 py-3 text-sm lg:text-xl text-medium font-medium text-center text-white border border-emerald-50 rounded-2xl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Successfully!
          </div>
          <div>
            <a
              href="https://testnets.opensea.io/collection/prime-project-react"
              className="inline-flex cursor-pointer items-center ml-2 my-5 px-5 py-3 text-sm lg:text-xl text-medium font-medium text-center text-white bg-green-500 rounded-2xl hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              See On Opensea
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
