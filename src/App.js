/* eslint-disable */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Mint from "./components/Mint";
import Home from "./components/Home";

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint/>} />
      </Routes>
     </BrowserRouter>
  );
};

export default App;
