import React from "react";
import backgroundImg from "../assets/strawb_1.jpg";

const Home = () => {
  return (
    <div
      className="vw-100 vh-100"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <h1>ARIELLA RUTH ADELSTIEN</h1>
    </div>
  );
};
export default Home;
