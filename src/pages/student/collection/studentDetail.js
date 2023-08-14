import React, { useEffect, useState } from "react";

import {
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Table,
} from "reactstrap";

import { NavLink } from "react-router-dom";

import { MainContainer } from "../../../component/mainCard";
import CButton from "../../../component/Button/button";

export const StudentDetails = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Please enter first name";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <Col style={{ margin: 15 }}>
      {""}
      <Row className="border">
        <Col>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col>Student</Col>
            <Col>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Contact Person</Col>
            <Col>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Contact Number</Col>
            <Col>
              <Input />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col>Classroom</Col>
            <Col>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Email address</Col>
            <Col>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Date of birth</Col>
            <Col>
              <Input />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="border" style={{ marginTop: 20, padding: 10 }}>
        <Table size="sm">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>Teacher 1</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>Teacher 2</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Col>
  );
};
