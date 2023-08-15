import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import CButton from "../../../component/Button/button";
import { DropDownCu } from "../../../component/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { gettingAllTeacher } from "../../../store/actions/teacher";

export const TabDetails = ({ alloctionName, details }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingAllTeacher());
  }, []);
  const { getAllTeacher } = useSelector((state) => state.teacher);
  return (
    <>
      <Col>
        <Row className="mt-5 border p-2 bg-success bg-opacity-10">
          <Col className="col-2">Teacher</Col>
          <Col>
            <Container className="fluid">
              <Input type="select">
                {getAllTeacher.map((teacher) => {
                  return (
                    <option value={teacher.teacher_Id}>
                      {teacher.first_name + " " + teacher.last_name}
                    </option>
                  );
                })}
              </Input>
            </Container>
          </Col>
          <Col className="col-2">
            <CButton text="Select"></CButton>
          </Col>
        </Row>
        <Row className="mt-5 border p-3 bg-success bg-opacity-10">
          <Row>
            <Col>{alloctionName}</Col>
            <Col>
              <Input type="select">
                {details.map((item) => {
                  return <option value={item.value}>{item.name}</option>;
                })}
              </Input>
            </Col>
            <Col>
              <CButton text="Select"></CButton>
            </Col>
          </Row>
          <Row className="mt-5">
            <Table size="sm">
              <thead>
                <tr>
                  <th>{alloctionName}</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>
                    <CButton text="Deallocate" />
                  </td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>
                    <CButton text="Deallocate" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Row>
      </Col>
    </>
  );
};
