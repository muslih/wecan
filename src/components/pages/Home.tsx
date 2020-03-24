import React from "react";
import { Link } from "@reach/router";
import Container from "../templates/Container";
import "./Home.scss";

const Home = () => (
  <Container
    name="Home"
    title="Welcome to Wecan Playground"
    description="You can pick any playground you want!"
  >
    <div className="Home">
      <Link to="/wecan/sum">SUM X and Y</Link>
      <Link to="/wecan/multiply">Multiply X and Y</Link>
      <Link to="/wecan/prime">Prime Sequence</Link>
      <Link to="/wecan/fibonacci">Fibonacci Sequence</Link>
    </div>
  </Container>
);

export default Home;
