import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pottery">Pottery</Link>
      <Link to="/food">Food</Link>
      <Link to="/mixedmedia">Mixed Media</Link>
    </div>
  );
};

export default Navbar;
