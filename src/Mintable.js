/* eslint-disable */

import React, { useEffect, useState, useRef } from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInUp,
} from "./components/animation";
import { header_data } from "./prime";

import { MintNFTButton } from "./MintNFTButton";

import Modal from "react-modal";


import { configureChains, mainnet } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { useContractRead } from "wagmi";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useConnect,
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { ethers, BigNumber } from "ethers";

const NFTAddress = "0x1BE3FC4F064c7e47A47a3cdb584dDDD00E907EE2";
import abiFile from "./abi.json";

const MainMint = ({ accounts, setAccounts, isConnected }) => {
  

    const contractConfig = {
      address: NFTAddress,
      abi: abiFile,
    };

  
  const [mintAmount, setmintAmount] = useState(0);
  const [mintPrice, setmintPrice] = useState(0);

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
    address: NFTAddress,
    abi: abiFile.abi,
    functionName: "mint",
    args: [
      BigNumber.from(mintAmount),
      {
        value: ethers.utils.parseEther((mintPrice * mintAmount).toString()),
      },
    ],
  });



  const handleOne = () => {
    
    setmintAmount(1);
  };

  const handleTwo = () => {
    setmintAmount(2);
  };

  const handleThree = () => {
    setmintAmount(3);
  };



  const { data, write } = useContractWrite(config);
  const { address, isConnecting, isDisconnected } = useAccount();

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });


  /* Read mint Price*/

  
  const [supplyData, setSupplyData] = useState(null);
  const [balance, setBalance] = useState(null);
  const [maxMint, setmintMax] = useState(null);
  const [maxSale, setSaleMax] = useState(null);
  const [perAccount, setPerAccount] = useState(null);

  const [totalAmount, setTotal] = useState(null);

  
  

  const { data: totalBalance, error: totalBalanceError } = useContractRead({
    ...contractConfig,
    functionName: "balanceOf",
  });

  const { data: limitAccount, error: limitAccountError } = useContractRead({
    ...contractConfig,
    functionName: "perAccount",
  });

 
  const { data: totalSupplyData, error: totalSupplyError } = useContractRead({
    ...contractConfig,
    functionName: "totalSupply",
  });

  const { data: totalMintMax, error: totalMaxError } = useContractRead({
    ...contractConfig,
    functionName: "ProjectSupply",
  });

  const { data: totalSale, error: totalSaleError } = useContractRead({
    ...contractConfig,
    functionName: "saleAmount",
  });

  useEffect(() => {
    if (totalSupplyData) {
      let temp = totalSupplyData;
      setSupplyData(temp);
    }
  }, [totalSupplyData]);

  useEffect(() => {
    if (limitAccount) {
      let temp = limitAccount;
      setPerAccount(temp);
    }
  }, [limitAccount]);

  useEffect(() => {
    if (totalBalance) {
      let temp = totalBalance;
      temp = setBalance(temp);
    }
  }, [totalBalance]);

  

  useEffect(() => {
    if (totalMintMax) {
      let temp = totalMintMax;
      setmintMax(temp);
    }
  }, [totalMintMax]);

  useEffect(() => {
    if (totalSale) {
      let temp = totalSale;
      setSaleMax(temp);
    }
  }, [totalSale]);

  const [bar, setBar] = useState(0);

    const getTotal = () => {
     setTotal(5);
    };


  


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

 const ProgressBar = props => {
   const { bgcolor, completed } = props;

   const containerStyles = {
     height: 35,
     width: "100%",
     backgroundColor: "#F9B5D0",
     borderRadius: 50,
   };

   const fillerStyles = {
     height: "100%",
     width: `${completed}%`,
     backgroundColor: bgcolor,
     borderRadius: "inherit",
     textAlign: "right",
   };

   const labelStyles = {
     padding: 10,
     color: "#1C315E",
     fontWeight: "bold",
   };

   return (
     <div className="h-10 bg-gradient-to-r from-purple-500 to-pink-700 rounded-3xl ">
       <div style={fillerStyles}>
        <div className="flex items-center justify-center">
         <span style={labelStyles}>{`${ ((supplyData * 100 )/ maxSale).toFixed(1)}%`}</span>
         </div>
       </div>
     </div>
   );
 };

 const testData = [
   { bgcolor: "#ffffff", completed: 60 },
 ];


  return (
    <div>
      <div>
        <div className="relative md:mt-1 mt-12 px-8 lg:px-1">
          <div className="mx-auto max-w-3xl pt-14 pb-28 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={300}>
                  <h1 className="text-2xl lg:text-6xl font-extrabold tracking-normal text-center lg:text-center py-3 lg:py-8">
                    {header_data.intro}
                  </h1>
                </Reveal>
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={700}
                  delay={500}>
                  <p className=" my-4 lg:my-10 text-base lg:text-xl leading-8 px-2 lg:px-5 text-gray-300  text-center lg:text-center">
                    {header_data.headerText}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row bg-[#ffffff10] rounded-t-3xl justify-center">
          <div className="w-full lg:w-[40%] p-3 lg:p-12 flex flex-col items-center justify-start lg:items-start">
            <div className="flex flex-col  py-5 px-5 w-full">
              <div className="flex items-center justify-center px-2.5 ">
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={1000}
                  delay={700}>
                  <div className="cursor-pointer text-xl font-semibold items-center px-12 py-6 lg:text-5xl text-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Mint Information
                  </div>
                </Reveal>
              </div>
              <div className="py-4 lg:p-12 opacity-80">
                <Reveal keyframes={fadeInLeft} duration={1000} delay={700}>
                  <div className="space-y-4 lg:space-y-10 px-5 py-5 mb-5 ">
                    <p className="text-lg lg:text-xl font-normal lg:font-semibold ">
                      Chain : Ethereum Georli TestNet
                    </p>

                    <p className="text-lg lg:text-xl font-normal lg:font-semibold">
                      Mint Price Per Sale : {mintPrice.toString()} ETH
                    </p>
                    <p className="text-lg lg:text-xl font-normal lg:font-semibold">
                      Project Total Supply : {maxMint.toString()}
                    </p>
                    <p className="text-lg lg:text-xl font-normal lg:font-semibold">
                      Mint Limit Per Wallet : {perAccount.toString()}
                    </p>
                    <p className="text-lg lg:text-xl font-normal  lg:font-semibold">
                      Total Minting Amount : {supplyData.toString()} /{" "}
                      {maxSale.toString()}
                    </p>
                    <div className="App">
                      {testData.map((item, idx) => (
                        <ProgressBar
                          key={idx}
                          bgcolor={item.bgcolor}
                          completed={supplyData.toString()}
                        />
                      ))}
                    </div>
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
                        label="CONNECT"
                        chainStatus="icon"
                      />
                    </div>

                    <div className="flex items-center justify-center ">
                      <div className="px-3">
                        <p className="border border-white px-10 py-3 text-2xl rounded-2xl font-normal hover:bg-[#ffffff36] ">
                          Total: {`${mintPrice * mintAmount}`} ETH
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-5">
                      <div className="px-2">
                        <button
                          onClick={handleOne}
                          className="border border-white px-5 py-2 text-2xl cursor-pointer rounded-2xl font-bold hover:bg-[#ffffff26] ">
                          1
                        </button>
                      </div>

                      <div className="px-2">
                        <button
                          onClick={handleTwo}
                          className="border border-white px-5 py-2 text-2xl cursor-pointer rounded-2xl font-bold hover:bg-[#ffffff26] ">
                          2
                        </button>
                      </div>
                      <div className="px-2">
                        <button
                          onClick={handleThree}
                          className="border border-white px-5 py-2 text-2xl rounded-2xl cursor-pointer font-bold hover:bg-[#ffffff36] ">
                          3
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-5">
                      <MintNFTButton
                        quantity={mintAmount}
                        abi={abiFile}
                        contractAddress={NFTAddress}
                    />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 hidden  z-50 w-full p-4  overflow-x-hidden overflow-y-auto md:inset-0  md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <div className="flex justify-center items-center text-center">
                  <p className="text-xl font-semibold text-green-700 dark:text-white">
                    Minting Was Successfully!
                  </p>
                </div>

                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <a
                  href={`https://etherscan.io/tx/${data?.hash}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Transaction Hash
                </a>
                <a
                  href="https://testnets.opensea.io/collection/prime-project-react"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  Opensea
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMint;
