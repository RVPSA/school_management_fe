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
import { useDispatch, useSelector } from "react-redux";
import { gettingClassroom } from "../../store/actions";
import { gettingAllSubject } from "../../store/actions/subject";

export const Allocation = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    dispatch(gettingClassroom());
    dispatch(gettingAllSubject());
  }, []);
  const { getClassRoom } = useSelector((state) => state.classroom);
  const { getAllSubject } = useSelector((state) => state.subject);
  const classData = [];
  getClassRoom.map((item) =>
    classData.push({
      name: item.classroom_name,
      value: item.classroom_Id,
    })
  );
  const subjectData = [];
  getAllSubject.map((item) =>
    subjectData.push({
      name: item.subject_name,
      value: item.subject_Id,
    })
  );
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
                <TabDetails
                  alloctionName="Class"
                  details={classData}
                ></TabDetails>
              </TabPane>
              <TabPane tabId="2">
                <TabDetails
                  alloctionName="Subject"
                  details={subjectData}
                ></TabDetails>
              </TabPane>
            </TabContent>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};
