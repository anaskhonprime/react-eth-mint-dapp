/* eslint-disable */
import React, { useState } from "react";

function Header() {

    return (
      <div class="relative md:mt-2 mt-12 px-8 lg:px-8">
        <div class="mx-auto max-w-3xl pt-32 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
            </div>

            <div>
              <h1 class="text-3xl  lg:text-6xl font-extrabold tracking-normal  text-center lg:text-center  py-8">
                The project that inspired the modern CryptoArt movement
              </h1>
              <p class="my-10 text-lg lg:text-xl leading-8 px-3 lg:px-5 text-gray-300  text-center lg:text-center">
                5,555 unique collectible characters with proof of ownership
                stored on the Ethereum blockchain.
              </p>
              <div class="my-10 flex gap-x-4 justify-center">
                <a
                  href="#"
                  class="inline-block btn_primary rounded-xl px-5 py-2 lg:px-10 lg:py-2 text-base lg:text-lg font-semibold leading-7 text-white shadow-sm">
                  Mint Now
                  <span class="text-indigo-200" aria-hidden="true"></span>
                </a>
                <a
                  href="#"
                  class="inline-block rounded-xl border border-white px-5 py-2 lg:px-10 lg:py-2 font-semibold leading-7 text-white shadow-sm  hover:bg-gray-600 ">
                  Learn More
                  <span class="text-gray-400" aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fill-opacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9089FC"></stop>
                    <stop offset="1" stop-color="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );

}
  
export default Header;
