/* eslint-disable */

import React from "react";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full mt-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center lg:text-center mt-40">
            About Us
          </h1>
          <p className="my-5 text-lg lg:text-xl leading-8 px-5 lg:px-10 text-gray-300  text-center lg:text-center">
            5,555 unique collectibles on the Ethereum blockchain.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center my-32 px-5 py-6 ">
        <div className="flex items-center justify-center ">
          <img
            class="p-2 h-120 w-120 cover-fit rounded-2xl"
            src="https://www.teahub.io/photos/full/19-192636_wallpaper-samsung-galaxy-m10-abstract-colorful-hd-samsung.png"
          />
        </div>

        <div className="flex flex-col" >
          <h3>Get Popular NFT</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
