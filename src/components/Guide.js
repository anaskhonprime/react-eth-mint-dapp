/* eslint-disable */
import React, { useState } from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "./animation";

import { mint_guide } from "../prime";

function Guide() {
  return (
    <div className="mt-5 flex flex-col lg:flex-row justify-evenly items-center mb-5">
      {mint_guide.map((item, i) => (
        <Reveal
          keyframes={fadeInDownShorter}
          duration={800}
          delay={250 * (i + 1)}>
          <div className="max-w-md bg-[#ffffff1a] hover:bg-[#ffffff2f] transition duration-300 m-3 lg:m-0 ease-in-out space-y-7 w-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-center ">
              <img
                className=" p-2 w-100 h-48 lg:h-72 cover-fit rounded-2xl "
                src={item.img}
              />
            </div>
            <div className="p-5">
              <a>
                <h5 className="mb-6 px-2 text-xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
                  {item.header}
                </h5>
              </a>

              <p className="mb-6 text-base lg:text-lg h-20 px-2 font-normal opacity-70 dark:text-gray-400">
                {item.text}
              </p>

              <Reveal
                keyframes={fadeInDownShorter}
                duration={800}
                delay={250 * (i + 1)}>
                <a className=" inline-flex btn_primary items-center ml-2 my-5 px-5 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Learn More
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
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Guide;
