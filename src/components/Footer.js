/* eslint-disable */
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "./animation";



function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-2.5 py-3 my-32">
        <div className="w-[25% mx-20">
          <div className="flex flex-col px-10">
            <h2 className="font-bold text-4xl py-5">NFTPRIME</h2>
            <p className="text-xl font-medium py-3 pr-32 tracking-wide opacity-70">
              The project that inspired the <br></br> modern CryptoArt movement
            </p>
          </div>
        </div>

        <div className="flex-1 items-center justify-evenly">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl cursor-pointer hover:text-purple-400 py-5">
              About
            </h2>
            <div>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Products
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Resources
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Team
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                FAQ
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center justify-evenly">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl cursor-pointer hover:text-purple-400 py-5">
              Company
            </h2>
            <div>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Our Team
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Partner With Us
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Privacy & Policy
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                Features
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 items-center justify-evenly">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl cursor-pointer hover:text-purple-400 py-5">
              Contact
            </h2>
            <div>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                + 012 3456789
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer ">
                nftprime@gmail.com
              </p>
              <p className="text-xl font-medium py-1.5 pr-32 opacity-50 tracking-wide hover:opacity-75 cursor-pointer "></p>
              <div className="flex flex-row opacity-70 py-5 space-x-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f4f4f4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f4f4f4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f4f4f4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f4f4f4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  {" "}
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-center">
          <div class="inline-flex cursor-pointer items-center ml-2 my-5 px-5 py-5 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-full hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f4f4f4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4-4-4 4M12 16V9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
