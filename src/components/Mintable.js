/* eslint-disable */

import React, { useState } from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "./animation";

import { header_data } from "../prime";

var account = null;
var contract = null;
var mintPrice = 0;
var totalPrice = 0;


const connect = async () => {
  if (window.ethereum) {
    await window.ethereum.send("eth_requestAccounts");
    window.web3 = new Web3(window.ethereum);

    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
    
    contract = new web3.eth.Contract(ABI, ADDRESS);
  }  
};



 const mint = async () => {
   

   if (contract) {
    // var p = document.getElementById("number-count");
     //var text = p.textContent;
     const quantity = 2; 

    

     var total_value = 5 * quantity * 10 ** 16;

     await contract.methods.mint(quantity).send({
       from: account,
       value: total_value,
     });

     
   }
 };

const ADDRESS = "0xDC76D0ea6A8D7103b3db689a9B3a53DE4f614856";

const ABI = [
  [
    {
      inputs: [
        {
          internalType: "address",
          name: "_royaltyReceiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "_royaltyFraction",
          type: "uint96",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "ApprovalCallerNotOwnerNorApproved",
      type: "error",
    },
    {
      inputs: [],
      name: "ApprovalQueryForNonexistentToken",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "BalanceQueryForZeroAddress",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "MintERC2309QuantityExceedsLimit",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_receiver",
          type: "address",
        },
      ],
      name: "mintForAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "MintToZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "MintZeroQuantity",
      type: "error",
    },
    {
      inputs: [],
      name: "OwnerQueryForNonexistentToken",
      type: "error",
    },
    {
      inputs: [],
      name: "OwnershipNotInitializedForExtraData",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferCallerNotOwnerNorApproved",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferFromIncorrectOwner",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferToNonERC721ReceiverImplementer",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferToZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "URIQueryForNonexistentToken",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "toTokenId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "ConsecutiveTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_hiddenMetadataUri",
          type: "string",
        },
      ],
      name: "setHiddenMetadataUri",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_maxmint",
          type: "uint256",
        },
      ],
      name: "setLimitPersonSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_limitsale",
          type: "uint256",
        },
      ],
      name: "setLimitSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_maxsupply",
          type: "uint256",
        },
      ],
      name: "setMaxSupply",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_mintprice",
          type: "uint256",
        },
      ],
      name: "setMintCost",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "value",
          type: "bool",
        },
      ],
      name: "setOperatorFilteringEnabled",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "_state",
          type: "bool",
        },
      ],
      name: "setPaused",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "_state",
          type: "bool",
        },
      ],
      name: "setPublicMintEnabled",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "_state",
          type: "bool",
        },
      ],
      name: "setRevealed",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint96",
          name: "royaltyFraction",
          type: "uint96",
        },
      ],
      name: "setRoyalties",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_uriPrefix",
          type: "string",
        },
      ],
      name: "setUriPrefix",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_uriSuffix",
          type: "string",
        },
      ],
      name: "setUriSuffix",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      name: "functionLocked",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "hiddenMetadataUri",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "limitSaleAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_MINTS",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "mintPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "operatorFilteringEnabled",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "publicMintEnabled",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "revealed",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_salePrice",
          type: "uint256",
        },
      ],
      name: "royaltyInfo",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "uriPrefix",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "uriSuffix",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "walletOfOwner",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
];

function Mintable() {
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
                  <div className="px-5 py-5 my-10  ">
                    <p id="wallet-address" className="text-xl font-bold  ">
                      Wallet Address :
                    </p>
                  </div>

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
                    <div className="flex items-center justify-center">
                      <h5
                        onClick={connect}
                        className="text-center border cursor-pointer border-gray-400 rounded-xl mb-6 px-32 py-3 text-xl lg:text-xl font-bold tracking-tight text-white dark:text-white">
                        Connect Wallet
                      </h5>
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
                      <button
                        onClick={mint}
                        className="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-3 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Mint Now
                      </button>
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
