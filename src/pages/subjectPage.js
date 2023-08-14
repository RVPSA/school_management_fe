import React, { useEffect, useState } from "react";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";
import { Col, Container, Row, Input, InputGroup } from "reactstrap";

import CButton from "../component/Button/button";
import TextInputField from "../component/textInputField";
import { Loading } from "../component/loading/loadingSpinner";

export const SubjectPage = () => {
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
    if (!values.subjectName) {
      errors.subjectName = "Please enter subject name";
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
          <MainContainerHeader title="Subject Page" />
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col className="col-10">
                    <TextInputField
                      placeholder="Subject Name"
                      onChange={handleChange}
                      name="subjectName"
                      invalid={formErrors.subjectName ? true : false}
                      formFeedBack={
                        formErrors.subjectName ? formErrors.subjectName : ""
                      }
                    ></TextInputField>
                  </Col>
                  <Col style={{ paddingTop: 25 }}>
                    <CButton
                      text="Add"
                      outline={true}
                      color="success"
                      onClick={() => {
                        handleSubmit();
                      }}
                    />
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
