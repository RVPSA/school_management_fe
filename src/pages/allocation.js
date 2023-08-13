import React, { useEffect, useState } from "react";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";
import {
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  TabContent,
  TabPane,
} from "reactstrap";

import CButton from "../component/Button/button";

export const Allocation = () => {
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
          <MainContainerHeader title="Allocation Page" />
          <Container>
            <TabContent>
              <TabPane>
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};
