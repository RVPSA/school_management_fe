import React, { useState } from "react";
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

export const TabDetails = ({ alloctionName }) => {
  const [teacherDropDown, setTeacherDropDown] = useState(false);
  return (
    <>
      <Col>
        <Row className="mt-5 border p-2 bg-success bg-opacity-10">
          <Col className="col-2">Teacher</Col>
          <Col>
            <Container className="fluid">
              {/* <Dropdown
                direction="down"
                isOpen={teacherDropDown}
                toggle={() => {
                  setTeacherDropDown(!teacherDropDown);
                }}
              >
                <DropdownToggle aria-expanded color="primary">
                  Select a teacher
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Teacher 1</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Teacher 2</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
              <Input></Input>
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
              <Input></Input>
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
