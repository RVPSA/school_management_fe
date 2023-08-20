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

export const TabDetails = ({
  alloctionName,
  nonAllocate,
  allocate,
  allocateMethod,
  deAllocateMethod,
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <Col>
        <Row className="mt-5 border p-3 bg-success bg-opacity-10">
          <Row>
            <Col>{alloctionName}</Col>
            <Col>
              <Input
                type="select"
                onClick={(event) =>
                  setSelectedValue(parseInt(event.target.value))
                }
              >
                <option value=""></option>
                {nonAllocate.map((item) => {
                  return <option value={item.value}>{item.name}</option>;
                })}
              </Input>
            </Col>
            <Col>
              <CButton
                text="Allocate"
                onClick={() => {
                  allocateMethod(selectedValue);
                }}
              ></CButton>
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
                {allocate.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>{item.name}</td>
                        <td>
                          <CButton
                            text="Deallocate"
                            onClick={() => deAllocateMethod(item.value)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Row>
      </Col>
    </>
  );
};
