import React from "react";
import Layout from "../component/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentPage from "../pages/student/studentPage";
import { TeacherPage } from "../pages/teacherPage";
import HomePage from "../pages/homePage";
import { ClassRoomPage } from "../pages/classRoomPage";
import { SubjectPage } from "../pages/subjectPage";
import { Allocation } from "../pages/allocation/allocation";

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/class" element={<ClassRoomPage />} />
          <Route path="/subject" element={<SubjectPage />} />
          <Route path="/allocation" element={<Allocation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
