/* eslint-disable */
import React, { useState } from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "./animation";

import { team } from "../prime";

function Team() {
  return (
    <div>
      <div className="shrink w-120 flex-col items-center justify-center mt-5">
        <div className="flex flex-col items-center justify-center">
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={500}>
            <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center lg:text-center mt-10 lg:mt-40">
              Team Members
            </h1>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={500}>
            <p className="my-5 text-lg lg:text-xl opacity-70 leading-8 px-6 lg:px-10 text-gray-300  text-center lg:text-center">
              A team member is an employee who works in a group or team
            </p>
          </Reveal>
        </div>
      </div>

      <div>
        <div className="mt-5 flex flex-col lg:flex-row justify-center space-x lg:space-x-10 items-center mb-5 py-16  ">
          {team.map((item, i) => (
            <Reveal
              keyframes={fadeInDownShorter}
              duration={1000}
              delay={300 * (i + 1)}>
              <div className="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff29] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-center ">
                  <img
                    className=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                    src={item.img}
                  />
                </div>

                <div className="p-5 tracking-wide">
                  <div>
                    <h5 className="text-center mb-6 px-2  text-xl lg:text-3xl font-bold tracking-tight text-white dark:text-white">
                      {item.name}
                    </h5>
                  </div>
                  <p className=" text-sm lg:text-lg mb-6 text-center px-2 font-normal opacity-70 hover:opacity-80 dark:text-gray-400">
                    {item.job}
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-flex cursor-pointer items-center ml-2 my-5 px-12 py-2 text-sm lg:text-xl text-medium font-medium text-center text-white bg-purple-700 rounded-2xl hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Follow
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
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
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal keyframes={fadeInDownShorter} duration={1000} delay={700}>
        <div className="flex items-center justify-center my-5 lg:my-36">
          <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-600 w-4/5 h-96 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-left lg:text-center py-10 lg:py-16">
              <Reveal keyframes={fadeInUp} duration={1000} delay={900}>
                <h5 className="mb-2 text-3xl lg:text-6xl px-3 lg:px-20 font-extrabold tracking-tight dark:text-white">
                  Get ready to collect our Prime NFTs
                </h5>
              </Reveal>
            </div>
            <div className="text-left lg:text-center ">
              <Reveal
                keyframes={fadeInDownShorter}
                duration={1000}
                delay={1000}>
                <p className="mb-3 text-base lg:text-2xl font-normal px-3 lg:px-[25%] opacity-70 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2023 so far, in reverse chronological order.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Team;
