import React, { useEffect, useState } from "react";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";
import { Col, Container, Row, Input, InputGroup, Alert } from "reactstrap";

import CButton from "../component/Button/button";
import TextInputField from "../component/textInputField";
import { useDispatch, useSelector } from "react-redux";
import { addingClassRoom } from "../store/actions";

export const ClassRoomPage = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const addClassRoomM = () => {
    setFormErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.className) {
      errors.className = "Please enter class room name";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(formValues);
      dispatch(addingClassRoom(formValues));
    }
  }, [formErrors]);
  const { addClassRoom, isAddingClassRoomFail } = useSelector(
    (state) => state.classroom
  );
  return (
    <>
      <Container className="p-0">
        <MainContainer>
          <MainContainerHeader title="Class Page" />
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col className="col-10">
                    <TextInputField
                      placeholder="Class Room Name"
                      onChange={handleChange}
                      name="className"
                      invalid={formErrors.className ? true : false}
                      formFeedBack={
                        formErrors.className ? formErrors.className : ""
                      }
                    ></TextInputField>
                  </Col>
                  <Col style={{ paddingTop: 25 }}>
                    <CButton
                      text="Add"
                      outline={true}
                      color="success"
                      onClick={() => {
                        addClassRoomM();
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          {!Array.isArray(addClassRoom) && (
            <Alert color="primary">classroom Added SuccessFully</Alert>
          )}
        </MainContainer>
      </Container>
    </>
  );
};
