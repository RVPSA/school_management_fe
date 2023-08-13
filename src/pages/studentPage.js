import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import TextInputField from "../component/textInputField";
import CButton from "../component/Button/button";

export const StudentPage = () => {
  const [inValidFirstName, setInValidFirstName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const add = () => {
    if (firstName === "") {
      setInValidFirstName(true);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <h6>Student Interface</h6>
        </Row>
        <Row>
          <Col>
            <TextInputField
              label="First Name"
              invalid={inValidFirstName}
              formFeedBack="Enter studet first name"
              onChange={handleFirstName}
            />
          </Col>
          <Col>
            <TextInputField
              label="Last Name"
              formFeedBack="Enter studet first name"
            />
          </Col>
        </Row>
        <Row>
          <TextInputField
            label="Contact No"
            formFeedBack="Enter studet first name"
          />
        </Row>
        <Row>
          <TextInputField
            label="Guardian"
            formFeedBack="Enter studet first name"
          />
        </Row>
        <Row>
          <TextInputField
            label="E-mail Address"
            formFeedBack="Enter studet first name"
          />
        </Row>
        <Row>
          <Col>
            <TextInputField
              label="Date of Birth"
              formFeedBack="Enter studet first name"
            />
          </Col>
          <Col>
            <TextInputField
              label="Age"
              formFeedBack="Enter studet first name"
            />
          </Col>
        </Row>
        <Row>
          <TextInputField
            label="Classroom"
            formFeedBack="Enter studet first name"
          />
        </Row>
        <Row>
          <CButton text="Add" outline={false} color="primary" onClick={add} />
        </Row>
      </Container>
    </>
  );
};

export default StudentPage;
