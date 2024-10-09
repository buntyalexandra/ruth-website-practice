import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/food">Food</Link>
      </div>
    </nav>
  );
};

export default Navbar;
