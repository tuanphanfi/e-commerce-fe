import React from "react";
import { Container, CardColumns } from "react-bootstrap";

import CakeCard from "../../components/CakeCard";
const Homepage = () => {
  return (
    <>
      <Container>
        <h1>Cake store</h1>
        <CardColumns>
          <CakeCard />
          <CakeCard />
          <CakeCard />
        </CardColumns>
      </Container>
    </>
  );
};

export default Homepage;
