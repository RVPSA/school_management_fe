import React, { useEffect, useState } from "react";
import { MainContainer } from "../component/mainCard";
import { MainContainerHeader } from "../component/mainContainerHeader";
import { Alert, Col, Container, Row } from "reactstrap";
import TextInputField from "../component/textInputField";
import CButton from "../component/Button/button";
import { DropDownCu } from "../component/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { addingTeacher, gettingClassroom } from "../store/actions";
import { gettingAllSubject } from "../store/actions/subject";

export const TeacherPage = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "contact_number" ||
      name === "classroom_Id" ||
      name === "subject_Id"
    ) {
      setFormValues({ ...formValues, [name]: parseInt(value) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Please enter first name";
    }
    if (!values.last_name) {
      errors.last_name = "Please enter last name";
    }
    if (!values.contact_number) {
      errors.contact_number = "Please enter mobile number";
    }
    if (!values.email) {
      errors.email = "Please enter email";
    }
    if (!values.classroom_Id) {
      errors.classroom_Id = "Please select a classroom";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(formValues);
      dispatch(addingTeacher(formValues));
    }
    dispatch(gettingClassroom());
    dispatch(gettingAllSubject());
  }, [formErrors]);
  const { addTeacher } = useSelector((state) => state.teacher);
  const { getClassRoom, isGettingClassRoomFail, isGettingClassRoom } =
    useSelector((state) => state.classroom);

  const { getAllSubject, isGettingAllSubject, isGettingAllSubjectFail } =
    useSelector((state) => state.subject);
  console.log(getAllSubject);
  const data = [];
  getClassRoom.map((item) =>
    data.push({
      name: item.classroom_name,
      value: item.classroom_Id,
    })
  );
  const data2 = [];
  getAllSubject.map((item) =>
    data2.push({
      name: item.subject_name,
      value: item.subject_Id,
    })
  );
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
                      name="first_name"
                      onChange={handleChange}
                      invalid={formErrors.first_name ? true : false}
                      formFeedBack={
                        formErrors.first_name ? formErrors.first_name : ""
                      }
                    />
                  </Col>
                  <Col>
                    <TextInputField
                      label="Last Name"
                      name="last_name"
                      onChange={handleChange}
                      invalid={formErrors.last_name ? true : false}
                      formFeedBack={
                        formErrors.last_name ? formErrors.last_name : ""
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextInputField
                      label="E-mail"
                      name="email"
                      onChange={handleChange}
                      invalid={formErrors.email ? true : false}
                      formFeedBack={formErrors.email ? formErrors.email : ""}
                    />
                  </Col>
                  <Col className="col-4">
                    <TextInputField
                      label="Mobile Number"
                      name="contact_number"
                      onChange={handleChange}
                      invalid={formErrors.contact_number ? true : false}
                      formFeedBack={
                        formErrors.contact_number
                          ? formErrors.contact_number
                          : ""
                      }
                    />
                  </Col>
                </Row>
                <Row className="px-3">
                  <Col>
                    <DropDownCu
                      label="Class"
                      data={data}
                      onchange={handleChange}
                      name="classroom_Id"
                    ></DropDownCu>
                  </Col>
                  <Col>
                    <DropDownCu
                      label="Subject"
                      data={data2}
                      onchange={handleChange}
                      name="subject_Id"
                    ></DropDownCu>
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
            </Row>
          </Container>
          {!Array.isArray(addTeacher) && (
            <Alert color="primary">Teacher Added SuccessFully</Alert>
          )}
        </MainContainer>
      </Container>
    </>
  );
};
