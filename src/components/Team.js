/* eslint-disable */
import React, { useState } from "react";

function Team() {
  return (
    <div>
      <div className="shrink w-120 flex-col items-center justify-center mt-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center lg:text-center mt-10 lg:mt-40">
            Team Members
          </h1>
          <p className="my-5 text-lg lg:text-xl opacity-70 leading-8 px-6 lg:px-10 text-gray-300  text-center lg:text-center">
            A team member is an employee who works in a group or team
          </p>
        </div>
      </div>

      <div>
        <div className="mt-5 flex flex-col lg:flex-row justify-center space-x lg:space-x-10 items-center mb-5 py-16  ">
          <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center ">
              <img
                class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                src="https://absatzwirtschaft-1cf93.kxcdn.com/wp-content/uploads/2022/05/how-to-nft-c-Adidas-1-1024x676.jpg"
              />
            </div>

            <div class="p-5 tracking-wide">
              <div>
                <h5 class="text-center mb-6 px-2  text-xl lg:text-3xl font-bold tracking-tight text-white dark:text-white">
                  Lionel Messi
                </h5>
              </div>
              <p class=" text-sm lg:text-lg mb-6 text-center px-2 font-normal opacity-70 hover:opacity-80 dark:text-gray-400">
                Product Manager | Strategist | Marketer
              </p>
              <div className="flex justify-center">
                <div class="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-2 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Follow
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

          <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center ">
              <img
                class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                src="https://assets-global.website-files.com/5e73a1e3ba24f2cd5dd2232a/62f66985e6fa143898ba6762_Como%20criar%20um%20NFT%20(1)%20(1).jpg"
              />
            </div>

            <div class="p-5 tracking-wide">
              <div>
                <h5 class="text-center mb-6 px-2  text-xl lg:text-3xl font-bold tracking-tight text-white dark:text-white">
                  Neymar da Silva Santos
                </h5>
              </div>
              <p class=" text-sm lg:text-lg mb-6 text-center px-2 font-normal opacity-70 hover:opacity-80 dark:text-gray-400">
                Community Manager | Social Media Manager
              </p>
              <div className="flex justify-center">
                <div class="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-2 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Follow
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

          <div class="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center ">
              <img
                class=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
              />
            </div>

            <div class="p-5 tracking-wide">
              <div>
                <h5 class="text-center mb-6 px-2  text-xl lg:text-3xl font-bold tracking-tight text-white dark:text-white">
                  Luis Suárez
                </h5>
              </div>
              <p class=" text-sm lg:text-lg mb-6 text-center px-2 font-normal opacity-70 hover:opacity-80 dark:text-gray-400">
                Artist | Graphic Designer | Animator
              </p>
              <div className="flex justify-center">
                <div class="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-2 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Follow
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
        </div>
      </div>

      <div className="flex items-center justify-center my-5 lg:my-36">
        <div class="p-6 bg-gradient-to-r from-purple-500 to-pink-600 w-4/5 h-96 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-left lg:text-center py-10 lg:py-16">
            <h5 class="mb-2 text-3xl lg:text-6xl px-3 lg:px-20 font-extrabold tracking-tight dark:text-white">
              Get ready to collect our Prime NFTs
            </h5>
          </div>
          <div className="text-left lg:text-center ">
            <p class="mb-3 text-base lg:text-2xl font-normal px-3 lg:px-[25%] opacity-70 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
