import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
} from "reactstrap";

export const HeaderBar = () => {
  // return <h4>School Management System</h4>;
  const [homeEnabled, setHomeEnabled] = useState(true);
  const [studentEnabled, setStudentEnabled] = useState(false);
  const [teacherEnabled, setTeacherEnabled] = useState(false);
  const [classEnabled, setClassEnabled] = useState(false);
  const [subjectEnabled, setSubjectEnabled] = useState(false);
  const [allocationEnabled, setAllocationEnabled] = useState(false);

  const handleClick = (name) => {
    switch (name) {
      case "home":
        setHomeEnabled(true);
        setStudentEnabled(false);
        setTeacherEnabled(false);
        setClassEnabled(false);
        setSubjectEnabled(false);
        setAllocationEnabled(false);
        break;
      case "student":
        setHomeEnabled(false);
        setStudentEnabled(true);
        setTeacherEnabled(false);
        setClassEnabled(false);
        setSubjectEnabled(false);
        setAllocationEnabled(false);
        break;
      case "teacher":
        setHomeEnabled(false);
        setStudentEnabled(false);
        setTeacherEnabled(true);
        setClassEnabled(false);
        setSubjectEnabled(false);
        setAllocationEnabled(false);
        break;
      case "class":
        setHomeEnabled(false);
        setStudentEnabled(false);
        setTeacherEnabled(false);
        setClassEnabled(true);
        setSubjectEnabled(false);
        setAllocationEnabled(false);
        break;
      case "subject":
        setHomeEnabled(false);
        setStudentEnabled(false);
        setTeacherEnabled(false);
        setClassEnabled(false);
        setSubjectEnabled(true);
        setAllocationEnabled(false);
        break;
      case "allocation":
        setHomeEnabled(false);
        setStudentEnabled(false);
        setTeacherEnabled(false);
        setClassEnabled(false);
        setSubjectEnabled(false);
        setAllocationEnabled(true);
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ backgroundColor: "#f9c365" }}>
      <Navbar>
        <NavbarBrand>School Management System</NavbarBrand>
        <Nav>
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("home")}
          >
            {homeEnabled ? (
              <Button>Home</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}> Home</NavItem>
            )}
          </Link>
          <Link
            to={"/student"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("student")}
          >
            {studentEnabled ? (
              <Button>Student</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}> Student</NavItem>
            )}
          </Link>
          <Link
            to={"/teacher"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("teacher")}
          >
            {teacherEnabled ? (
              <Button>Teacher</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}>Teacher</NavItem>
            )}
          </Link>
          <Link
            to={"/class"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("class")}
          >
            {classEnabled ? (
              <Button>Class</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}>Class</NavItem>
            )}
          </Link>
          <Link
            to={"/subject"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("subject")}
          >
            {subjectEnabled ? (
              <Button>Subject</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}> Subject</NavItem>
            )}
          </Link>
          <Link
            to={"/allocation"}
            style={{ textDecoration: "none" }}
            onClick={() => handleClick("allocation")}
          >
            {allocationEnabled ? (
              <Button>Allocation</Button>
            ) : (
              <NavItem style={{ margin: 10, color: "black" }}>
                {" "}
                Allocation
              </NavItem>
            )}
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};
