import React from "react";
import { Container, Spinner } from "reactstrap";

export const Loading = () => {
  return (
    <Container>
      <Spinner>Loading...</Spinner>
    </Container>
  );
};
