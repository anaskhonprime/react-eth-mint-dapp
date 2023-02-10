/* eslint-disable */
import React, { useState } from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Guide from "./Guide";
import About from "./About";
import Faq from "./Faq"
import Team from "./Team"
import Footer from "./Footer";


function Home() {
  return (
    <div className="bg-gradient-to-r from-[#263278]  to-[#97377f] text-white py-5">
      <Navbar />
      <Header />
      <Guide />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
