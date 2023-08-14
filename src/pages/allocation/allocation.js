import React, { useEffect, useState } from "react";
import { MainContainer } from "../../component/mainCard";
import { MainContainerHeader } from "../../component/mainContainerHeader";
import {
  Col,
  Container,
  Row,
  Input,
  InputGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
} from "reactstrap";

import CButton from "../../component/Button/button";
import { NavLink } from "react-router-dom";
import { TabDetails } from "./collection/tabDetails";

export const Allocation = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

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
            <Nav tabs>
              {activeTab == "1" ? (
                <NavLink
                  onClick={() => setActiveTab("1")}
                  style={{ textDecoration: "none" }}
                  className="border-start border-end  border-top"
                >
                  <NavItem style={{ margin: 5 }}>Class </NavItem>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setActiveTab("1")}
                  style={{ textDecoration: "none" }}
                >
                  <NavItem style={{ margin: 5 }}>Class </NavItem>
                </NavLink>
              )}
              {activeTab === "2" ? (
                <NavLink
                  onClick={() => setActiveTab("2")}
                  style={{ textDecoration: "none" }}
                  className="border-start border-end  border-top"
                >
                  <NavItem style={{ margin: 5 }}>Subject</NavItem>
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setActiveTab("2")}
                  style={{ textDecoration: "none" }}
                >
                  <NavItem style={{ margin: 5 }}>Subject</NavItem>
                </NavLink>
              )}
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <TabDetails alloctionName="Class"></TabDetails>
              </TabPane>
              <TabPane tabId="2">
                <TabDetails alloctionName="Subject"></TabDetails>
              </TabPane>
            </TabContent>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};
