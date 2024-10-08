import React from "react";
import Container from "react-bootstrap/Container";
import backgroundImg from "../assets/strawb_1.jpg";

const Home = () => {
  return (
    <Container
      fluid
      className="bg-image object-fit-contain vw-100 vh-100"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1>HOME</h1>
    </Container>
  );
};
export default Home;
