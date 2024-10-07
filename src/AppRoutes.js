import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from ".//components/Home";
import Pottery from "./components/Pottery";
import Food from "./components/Food";
import MixedMedia from "./components/MixedMedia";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pottery" element={<Pottery />} />
        <Route path="/food" element={<Food />} />
        <Route path="/mixedmedia" element={<MixedMedia />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
