import React from "react";
import Layout from "../component/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentPage from "../pages/studentPage";
import { TeacherPage } from "../pages/teacherPage";
import HomePage from "../pages/homePage";

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/teacher" element={<TeacherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
