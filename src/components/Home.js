/* eslint-disable */
import React, { useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Guide from "./Guide";
import About from "./About";


function Home() {
  return (
    <div className="main_bg text-white py-5">
      <Navbar />
      <Header />
      <Guide/>
      <About/>
    </div>
  );
}

export default Home;
