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
import { useDispatch } from "react-redux";
import { deletingStudent, updatingStudent } from "../../../store/actions";

export const StudentDetails = ({ details }) => {
  const dispatch = useDispatch();
  // const [formValues, setFormValues] = useState({});
  // const [formErrors, setFormErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);
  // const [activeTab, setActiveTab] = useState("1");
  const [updateDetails, setUpdateDetails] = useState({});
  useEffect(() => {
    setUpdateDetails(details);
  }, [details]);
  console.log("Updatedetails", updateDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contact_number" || name === "classroom_Id") {
      setUpdateDetails({ ...updateDetails, [name]: parseInt(value) });
    } else {
      setUpdateDetails({ ...updateDetails, [name]: value });
    }

    console.log(updateDetails);
  };

  const deleteStudent = () => {
    dispatch(deletingStudent(details.student_Id));
  };
  const updateStudent = () => {
    dispatch(updatingStudent(updateDetails));
  };
  // const handleSubmit = () => {
  //   setFormErrors(validate(formValues));
  //   setSubmitting(true);
  // };
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Please enter first name";
  //   }
  //   return errors;
  // };
  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && submitting) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  return (
    <Col style={{ margin: 15 }}>
      <Row className="border">
        <Col>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col>Student</Col>
            <Col>
              <Input
                disabled={true}
                value={details.first_name + " " + details.last_name}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Contact Person</Col>
            <Col>
              <Input
                defaultValue={details.contact_person}
                name="contact_person"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Contact Number</Col>
            <Col>
              <Input
                defaultValue={details.contact_number}
                name="contact_number"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row style={{ marginBottom: 10, marginTop: 10 }}>
            <Col>Classroom</Col>
            <Col>
              <Input defaultValue={details.classroom_Id} disabled={true} />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Email address</Col>
            <Col>
              <Input
                defaultValue={details.email}
                name="email"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>Date of birth</Col>
            <Col>
              <Input disabled={true} value={details.dob} />
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
      <Row className="mt-3 justify-content-between">
        <Col className="col-3">
          <CButton
            text="Delete"
            color="danger"
            onClick={deleteStudent}
          ></CButton>
        </Col>
        <Col className="col-3">
          <Container style={{ marginLeft: 125 }}>
            <CButton
              text="Update"
              color="info"
              onClick={updateStudent}
            ></CButton>
          </Container>
        </Col>
      </Row>
    </Col>
  );
};
