import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from ".//components/Home";
import Work from "./components/Work";
import Food from "./components/Food";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
