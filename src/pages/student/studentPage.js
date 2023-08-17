import React, { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Dropdown,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import TextInputField from "../../component/textInputField";
import CButton from "../../component/Button/button";
import { MainContainer } from "../../component/mainCard";
import { MainContainerHeader } from "../../component/mainContainerHeader";
import { StudentDetails } from "./collection/studentDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  addingStudent,
  findingStudent,
  gettingClassroom,
} from "../../store/actions";
import { DropDownCu } from "../../component/dropdown";
import { Loading } from "../../component/loading/loadingSpinner";

export const StudentPage = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [btnOutlineAdd, setBtnOutlineAdd] = useState(false);
  const [btnOutlineFind, setBtnOutlineFind] = useState(true);
  const [addStudent, setAddStudent] = useState(true);
  const [studentId, setStudentId] = useState("");
  const [age, setAge] = useState("");
  const [dobb, setdob] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "contact_number" ||
      name === "age" ||
      name === "classroom_Id"
    ) {
      setFormValues({ ...formValues, [name]: parseInt(value) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }

    if (name === "dob") {
      const today = new Date();
      const birthDate = new Date(e.target.value);
      var val = birthDate;
      var diff = (today.getTime() - birthDate.getTime()) / 1000;
      diff /= 60 * 60 * 24;
      var ageC = Math.abs(Math.round(diff / 365.25));
      setAge(ageC);
    }
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setSubmitting(true);
    // dispatch(addingStudent(formValues));
    console.log(formValues);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mRegx = /^[1-9]\d{8}$/;
    if (!values.first_name) {
      errors.first_name = "Please enter first name";
    }
    if (!values.last_name) {
      errors.last_name = "Please enter last name";
    }
    if (!values.contact_person) {
      errors.contact_person = "Please enter contact person";
    }
    if (!values.contact_number) {
      errors.contact_number = "Please enter mobile number";
    } else if (!mRegx.test(values.contact_number)) {
      errors.contact_number = "Invalid format";
    }
    if (!values.email) {
      errors.email = "Please enter email";
    } else if (!regex.test(values.email)) {
      errors.email = "invalid mail format";
    }
    if (!values.dob) {
      errors.dob = "Please enter Date of birth";
    }
    if (!values.classroom_Id) {
      errors.classroom_Id = "Please select a classroom";
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

  const findStudent = () => {
    if (studentId === "") console.log("Enter a Id");
    else {
      console.log("Student Id:", studentId);
      dispatch(findingStudent(studentId));
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(formValues);
      var data = {
        ...formValues,
        age: age,
      };

      console.log("data::::", data);
      dispatch(addingStudent(data));
    }
    dispatch(gettingClassroom());
  }, [formErrors]);
  const {
    isAddingStudent,
    student,
    studentDetails,
    isFindingStudent,
    isFindingStudentFail,
  } = useSelector((state) => state.student);
  const { getClassRoom, isGettingClassRoomFail, isGettingClassRoom } =
    useSelector((state) => state.classroom);
  console.log("STUDENT PAGE::", isAddingStudent, student);
  console.log("FIND STUDENT::", studentDetails);
  const data = [];
  getClassRoom.map((item) =>
    data.push({
      name: item.classroom_name,
      value: item.classroom_Id,
    })
  );
  console.log(data);
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
                        label="Contact Person"
                        name="contact_person"
                        onChange={handleChange}
                        invalid={formErrors.contact_person ? true : false}
                        formFeedBack={
                          formErrors.contact_person
                            ? formErrors.contact_person
                            : ""
                        }
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
                        placeholder="11xxxxxxx"
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
                    <Col>
                      <TextInputField
                        label="Date of Birth"
                        name="dob"
                        onChange={handleChange}
                        invalid={formErrors.dob ? true : false}
                        formFeedBack={formErrors.dob ? formErrors.dob : ""}
                        placeholder={"DD/MM/YYYY"}
                        type="date"
                      />
                    </Col>
                    <Col>
                      <TextInputField
                        label="Age"
                        name="age"
                        onChange={handleChange}
                        invalid={formErrors.age ? true : false}
                        formFeedBack={formErrors.age ? formErrors.age : ""}
                        isDisabled={true}
                        value={age}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="align-self-center">
                      {/* <TextInputField
                        label="Class"
                        name="classroom_Id"
                        onChange={handleChange}
                        invalid={formErrors.classroom_Id ? true : false}
                        formFeedBack={
                          formErrors.classroom_Id ? formErrors.classroom_Id : ""
                        }
                      /> */}
                      {/* <Label>Class</Label>
                      <br></br>
                      <select
                        style={{
                          width: "85%",
                          height: 38,
                          border: "1px solid #e9ecef",
                          borderRadius: "5px",
                          outline: 0,
                        }}
                      >
                        <option>ABC</option>
                      </select> */}
                      <DropDownCu
                        label="Class"
                        data={data}
                        onchange={handleChange}
                        name="classroom_Id"
                      ></DropDownCu>
                      {formErrors.classroom_Id && (
                        <div style={{ color: "red" }}>
                          {formErrors.classroom_Id}
                        </div>
                      )}
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
                  <div style={{ marginTop: 20 }}>
                    {!Array.isArray(student) && (
                      <Alert color="primary">
                        {"Student Added SuccessFully with ID " +
                          student.student_Id}
                      </Alert>
                    )}
                  </div>
                </Col>
              ) : (
                <Col className="col-10 ">
                  <Row>
                    <InputGroup>
                      <Input
                        placeholder="Enter Student ID"
                        onChange={(e) => setStudentId(e.target.value)}
                        value={studentId}
                      ></Input>
                      <CButton
                        text="Find"
                        outline={btnOutlineAdd}
                        color="success"
                        onClick={findStudent}
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    {isFindingStudent && (
                      <Container style={{ marginTop: 50, marginLeft: 50 }}>
                        <Loading></Loading>
                      </Container>
                    )}

                    {Object.keys(studentDetails).length != 0 && (
                      <StudentDetails details={studentDetails} />
                    )}
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
