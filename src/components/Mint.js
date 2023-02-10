/* eslint-disable */
import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Mintable from "../Mintable";




import { Fade, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "./animation";

function Mint() {
  return (
    <div className="main_bg text-white px-3 py-3">
      <Navbar />
      <Mintable/>
      <Footer />
      
    </div>
  );
}

export default Mint;
