import React from "react";
import { Container } from "reactstrap";

export const MainContainer = ({ children }) => {
  return (
    <>
      <Container
        className="border pt-4 pb-4 rounded-3 shadow-lg"
        style={{ backgroundColor: "#fef6e4" }}
      >
        {children}
      </Container>
    </>
  );
};
