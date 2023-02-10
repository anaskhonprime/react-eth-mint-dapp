/* eslint-disable */
import React from "react";

import { Fade, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "./animation";

import { about } from "../prime";

function About() {
  return (
    <div id="about" className=" px-1 py-1 lg:px-10 lg:py-5">
      <div className="shrink w-120 flex-col items-center justify-center  mt-5">
        <div className="flex flex-col items-center justify-center">
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={500}>
            <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center lg:text-center mt-16 lg:mt-40">
              About Us
            </h1>
          </Reveal>
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={700}>
            <p className="my-5 text-lg lg:text-xl leading-8 px-5 lg:px-10 text-gray-300 opacity-75 text-center lg:text-center">
              5,555 unique collectibles on the Ethereum blockchain.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-row mt-5 lg:mt-32 mb-20 px-3 py-5 lg:px-5 lg:py-6 ">
        <div className="w-[44%] hidden lg:block">
          <div className="relative h-[700px] w-full overflow-hidden  ">
            <Reveal keyframes={fadeInDownShorter} duration={1000} delay={500}>
              <img
                className="p-2 cover-fit rounded-2xl "
                src="https://www.teahub.io/photos/full/19-192636_wallpaper-samsung-galaxy-m10-abstract-colorful-hd-samsung.png"
              />
            </Reveal>
          </div>
        </div>

        <div className="flex-1  py-10 px-7 lg:py-10 lg:px-12 tracking-wide rounded-xl bg-[#ffffff10] hover:bg-[#ffffff27]  ">
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={500}>
            <p className="font-bold text-3xl mb-10"> {about.title}</p>
          </Reveal>

          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={400}>
            <p className="font-medium  text-[14px] lg:text-lg py-6 opacity-50 hover:opacity-75 ">
              {about.content1}
            </p>

            <p className="font-medium text-[14px] lg:text-lg py-6 opacity-50 hover:opacity-75">
              {about.content2}
            </p>

            <p className="font-medium text-[14px] lg:text-lg py-6 opacity-50 hover:opacity-75">
              {about.content3}
            </p>
          </Reveal>
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={500}>
            <div className=" inline-flex btn_primary items-center ml-1  mt-6 px-6 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
