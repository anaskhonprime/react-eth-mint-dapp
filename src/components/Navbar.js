/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";


function Navbar() {
  let [navbar] = useState(["About", "Services", "Contact", "Connect Wallet"]);

  var account = null;
  var contract = null;
  var mintPrice = 0;
  var totalPrice = 0;
  var totalMinted = 0;
  var mintIndexForSale = 0;
  var limitSaleAmount = 0;

  const connect = async () => {
    if (window.ethereum) {
      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);

      var accounts = await web3.eth.getAccounts();
      account = accounts[0];
      contract = new web3.eth.Contract(ABI, ADDRESS);
    }
  };

  return (
    <div className="">
      <div className="main_bg px-5 sm:px-4 py-8 dark:bg-gray-900  fixed w-full z-20 top-0 left-0 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <div className=" text-white font-bold flex text-base md:text-2xl tracking-normal">
              <p>NFT</p>
              <p className="pl-1">PRIME</p>
            </div>
          </div>
          <div className="flex md:order-2">
            <div className=" hidden lg:flex">
              <ConnectButton accountStatus="avatar" />
            </div>  
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="text-white w-7 h-7"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-5 mt-5  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 mx-2 text-xl font-semibold text-purple-200 rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mx-2 text-xl font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {navbar[0]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mx-2 text-xl font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {navbar[1]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 mx-2 text-xl font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {navbar[2]}
                </a>
              </li>
              <div className="flex lg:hidden">
                <ConnectButton
                  label="Connect Wallet"
                  chainStatus="none"
                  showBalance={false}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
