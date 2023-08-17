import React from "react";
import { Col, Row } from "reactstrap";

export const MainContainerHeader = ({ title }) => {
  return (
    <>
      <Row className="mb-2 justify-content-center align-items-center">
        <Col>
          <Row className="justify-content-center">{title}</Row>
        </Col>
      </Row>
    </>
  );
};
