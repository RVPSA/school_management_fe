import React, { useEffect, useState } from "react";
import { Col, Container, Input, InputGroup, Row } from "reactstrap";
import TextInputField from "../component/textInputField";
import CButton from "../component/Button/button";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";

export const StudentPage = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [btnOutlineAdd, setBtnOutlineAdd] = useState(false);
  const [btnOutlineFind, setBtnOutlineFind] = useState(true);
  const [addStudent, setAddStudent] = useState(true);

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

  const handleAddStudent = () => {
    setBtnOutlineAdd(false);
    setBtnOutlineFind(true);
    setAddStudent(true);
  };
  const handleFindStudent = () => {
    setBtnOutlineAdd(true);
    setBtnOutlineFind(false);
    setAddStudent(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <>
      <Container className="p-0">
        <MainContainer>
          <MainContainerHeader title="Student's Page" />
          <Container>
            <Row>
              <Col className="col-2 border-end">
                <Row>
                  <Container className="p-2 m-0">
                    <CButton
                      text="Add Student"
                      outline={btnOutlineAdd}
                      color="primary"
                      onClick={handleAddStudent}
                    />
                  </Container>
                </Row>
                <Row className="mb-5"></Row>
                <Row>
                  <Container className="p-2 m-0">
                    <CButton
                      text="Find Student"
                      outline={btnOutlineFind}
                      color="primary"
                      onClick={handleFindStudent}
                    />
                  </Container>
                </Row>
              </Col>
              {addStudent ? (
                <Col className="col-10 ">
                  <Row>
                    <Col className="col-4">
                      <TextInputField
                        label="First Name"
                        name="firstName"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                    <Col>
                      <TextInputField
                        label="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInputField
                        label="Contact Person"
                        name="contactPerson"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                    <Col className="col-4">
                      <TextInputField
                        label="Mobile Number"
                        name="mobileNumber"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInputField
                        label="E-mail"
                        name="eMail"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                    <Col>
                      <TextInputField
                        label="Date of Birth"
                        name="dob"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                    <Col>
                      <TextInputField
                        label="Age"
                        name="age"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInputField
                        label="Age"
                        name="age"
                        onChange={handleChange}
                        invalid={formErrors.firstName ? true : false}
                        formFeedBack={
                          formErrors.firstName ? formErrors.firstName : ""
                        }
                      />
                    </Col>
                    <Col className="col-3 align-self-center">
                      <Row className="justify-content-end mt-3">
                        <CButton
                          text="Add"
                          outline={false}
                          color="primary"
                          onClick={handleSubmit}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              ) : (
                <Col className="col-10 ">
                  <Row>
                    <InputGroup>
                      <Input placeholder="Enter Student ID"></Input>
                      <CButton
                        text="Find"
                        outline={btnOutlineAdd}
                        color="success"
                        onClick={() => {}}
                      />
                    </InputGroup>
                  </Row>
                </Col>
              )}
            </Row>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};

export default StudentPage;
