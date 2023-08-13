import React, { useEffect, useState } from "react";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";
import { Col, Container, Row } from "reactstrap";
import TextInputField from "../component/textInputField";
import CButton from "../component/Button/button";

export const TeacherPage = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

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
    <>
      <Container className="p-0">
        <MainContainer>
          <MainContainerHeader title="Teacher's Page" />
          <Container>
            <Row>
              <Col>
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
                      label="E-mail"
                      name="eMail"
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
                <Row className="justify-content-end px-3">
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
            </Row>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};
