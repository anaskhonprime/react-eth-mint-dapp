/* eslint-disable */
import React, { useState } from "react";

function Guide() {
  return (
    <div className="mt-5 flex flex-col lg:flex-row justify-evenly items-center mb-5">
      <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff2f] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center ">
          <img
            class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
            src="https://kriptomat.io/wp-content/uploads/2021/12/article_what-is-an-nft.png"
          />
        </div>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-6 px-2 text-xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              Noteworthy technology acquisitions 2023
            </h5>
          </a>
          <p class="mb-6 text-base lg:text-lg h-20 px-2 font-normal text-[#ffffff66] dark:text-gray-400">
            5,555 unique collectible characters with proof of ownership stored
            on the Ethereum blockchain.
          </p>
          <a
            href="#"
            class=" inline-flex btn_primary items-center ml-2 my-5 px-5 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff2f] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center ">
          <img
            class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
            src="https://cripto24.s3.amazonaws.com/media/uploads/2021/03/NFT-OG.webp"
          />
        </div>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-6 px-2 text-xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              The project that inspired the modern CryptoArt movement
            </h5>
          </a>
          <p class="mb-6 text-base lg:text-lg h-20 px-2 font-normal text-[#ffffff66] dark:text-gray-400">
            The NFTPRIME is art images, generated algorithmically. Most are
            punky-looking guys and girls
          </p>
          <a
            href="#"
            class=" inline-flex btn_primary items-center ml-2 my-5 px-5 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff2f] transition duration-300 ease-in-out m-3  lg:m-0 space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center ">
          <img
            class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
            src="https://cdn.mos.cms.futurecdn.net/X3WMf9weKruHGxzS9CGXh4.jpg"
          />
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-6 px-2 text-xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              The Project pre-date the ERC-721 standard and are a custom
              contract
            </h5>
          </div>
          <p class="mb-6 text-base lg:text-lg h-20 px-2 font-normal text-[#ffffff66] dark:text-gray-400">
            Project pre-date the ERC-721 standard and are a custom contract, it
            doesn't comply with any standards.
          </p>
          <div class=" inline-flex btn_primary items-center ml-2 my-5 px-5 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
