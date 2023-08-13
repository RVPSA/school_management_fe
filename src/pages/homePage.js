import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Assests } from "../assests/images";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="mb-5"></Row>
        <Row className="mb-5"></Row>
        <Row className="align-items-center">
          <Col className="col-6 overflow-hidden">
            <img src={Assests.home.group_1} width={"100%"}></img>
          </Col>
          <Col className="col-6 ">
            A school management system is a comprehensive software solution
            designed to streamline and automate various administrative tasks
            within educational institutions. It helps administrators, teachers,
            and parents efficiently manage student records, attendance,
            scheduling, and communication, enhancing the overall effectiveness
            and organization of the school.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
