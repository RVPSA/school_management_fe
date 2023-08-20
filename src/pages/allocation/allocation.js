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
import {
  allocatingClassroom,
  allocatingSubject,
  deallocatingClassroom,
  deallocatingSubject,
  gettingClassroom,
} from "../../store/actions";
import { gettingAllSubject } from "../../store/actions/subject";
import {
  gettingAllAllocateClass,
  gettingAllAllocateSubject,
  gettingAllTeacher,
} from "../../store/actions/teacher";

export const Allocation = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [selectedTeacherId, setSelectedTeacherID] = useState("");

  const { getClassRoom } = useSelector((state) => state.classroom);
  const { getAllSubject } = useSelector((state) => state.subject);
  const {
    getAllTeacher,
    allAllocateClass,
    allAllocateSubject,
    isGetAllAllocate,
  } = useSelector((state) => state.teacher);
  const {
    allocateSubject,
    allocateClassroom,
    deAllocateSubject,
    deAllocateClassroom,
  } = useSelector((state) => state.allocation);

  //to extract classroom Id from allocated classroom list
  const allocatedClassId = [];
  const allocatedClass = [];
  allAllocateClass.map((cls) => {
    allocatedClassId.push(cls.classroom_Id);
    allocatedClass.push({
      value: cls.classroom_Id,
      name: cls.classroom_name,
    });
  });

  //to extract subject Id from allocated subject list
  const allocatedSubjectId = [];
  const allocatedSubject = [];
  allAllocateSubject.map((sub) => {
    allocatedSubjectId.push(sub.subject_Id);
    allocatedSubject.push({
      value: sub.subject_Id,
      name: sub.subject_name,
    });
  });

  //filter not allocated classes with the comparision of allocated clz id and all clz id
  const notAllocatedClass = getClassRoom.filter(
    (classRoom) => !allocatedClassId.includes(classRoom.classroom_Id)
  );
  const notAllocatedClz = [];
  notAllocatedClass.map((clz) => {
    notAllocatedClz.push({
      value: clz.classroom_Id,
      name: clz.classroom_name,
    });
  });

  //filter not allocated sub with the comparision of allocated sub id and all sub id
  const notAllocatedSubject = getAllSubject.filter(
    (sub) => !allocatedSubjectId.includes(sub.subject_Id)
  );
  const notAllocatedSub = [];
  notAllocatedSubject.map((sub) => {
    notAllocatedSub.push({
      value: sub.subject_Id,
      name: sub.subject_name,
    });
  });

  //allocateMethod for Class
  const allocateClassMethod = (clz_id) => {
    const clzId = parseInt(clz_id);
    var data = {
      classroom_Id: clzId,
      teacher_Id: parseInt(selectedTeacherId),
    };

    dispatch(allocatingClassroom(data));
  };

  //allocateMethod for Subject
  const allocateSubjectMethod = (sub_id) => {
    const subId = parseInt(sub_id);
    var data = {
      subject_Id: subId,
      teacher_Id: parseInt(selectedTeacherId),
    };
    dispatch(allocatingSubject(data));
  };

  //deallocateMethod for Class
  const deallocateClassMethod = (clz_id) => {
    const clzId = parseInt(clz_id);
    var data = {
      classroom_Id: clzId,
      teacher_Id: parseInt(selectedTeacherId),
    };

    dispatch(deallocatingClassroom(data));
  };

  //deallocateMethod for subject
  const deallocateSubjectMethod = (sub_id) => {
    const subId = parseInt(sub_id);
    var data = {
      subject_Id: subId,
      teacher_Id: parseInt(selectedTeacherId),
    };
    dispatch(deallocatingSubject(data));
  };

  useEffect(() => {
    dispatch(gettingClassroom());
    dispatch(gettingAllSubject());
    dispatch(gettingAllTeacher());

    if (
      Object.keys(allocateClassroom).length != 0 ||
      deAllocateClassroom != ""
    ) {
      dispatch(gettingAllAllocateClass(selectedTeacherId));
    }
    if (Object.keys(allocateSubject).length != 0 || deAllocateSubject != "") {
      dispatch(gettingAllAllocateSubject(selectedTeacherId));
    }
  }, [
    allocateClassroom,
    allocateSubject,
    deAllocateSubject,
    deAllocateClassroom,
  ]);

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
                <>
                  <Row className="mt-5 border p-2 bg-success bg-opacity-10">
                    <Col className="col-2">Teacher</Col>
                    <Col>
                      <Container className="fluid">
                        <Input
                          type="select"
                          onClick={(event) =>
                            setSelectedTeacherID(parseInt(event.target.value))
                          }
                        >
                          <option value=""></option>
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
                      <CButton
                        text="Select"
                        onClick={() => {
                          dispatch(gettingAllAllocateClass(selectedTeacherId));
                        }}
                      ></CButton>
                    </Col>
                  </Row>
                </>
                {isGetAllAllocate && (
                  <TabDetails
                    alloctionName="Class"
                    nonAllocate={notAllocatedClz}
                    allocate={allocatedClass}
                    allocateMethod={allocateClassMethod}
                    deAllocateMethod={deallocateClassMethod}
                  ></TabDetails>
                )}
              </TabPane>
              <TabPane tabId="2">
                <>
                  <Row className="mt-5 border p-2 bg-success bg-opacity-10">
                    <Col className="col-2">Teacher</Col>
                    <Col>
                      <Container className="fluid">
                        <Input
                          type="select"
                          onClick={(event) =>
                            setSelectedTeacherID(parseInt(event.target.value))
                          }
                        >
                          <option value=""></option>
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
                      <CButton
                        text="Select"
                        onClick={() => {
                          dispatch(
                            gettingAllAllocateSubject(selectedTeacherId)
                          );
                        }}
                      ></CButton>
                    </Col>
                  </Row>
                </>
                {isGetAllAllocate && (
                  <TabDetails
                    alloctionName="Subject"
                    nonAllocate={notAllocatedSub}
                    allocate={allocatedSubject}
                    allocateMethod={allocateSubjectMethod}
                    deAllocateMethod={deallocateSubjectMethod}
                  ></TabDetails>
                )}
              </TabPane>
            </TabContent>
          </Container>
        </MainContainer>
      </Container>
    </>
  );
};
