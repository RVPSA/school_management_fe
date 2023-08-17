import axios from "axios";

export const getAllTeacherService = async () => {
  const response = await axios.get(
    "http://localhost:47696/api/teacher/teachers"
  );
  return response;
};

export const addTeacherService = async (data) => {
  const response = await axios.post(
    "http://localhost:47696/api/teacher/addteacher",
    data
  );
  return response;
};

export const getClassAllocationService = async (data) => {
  const response = await axios.get(
    `http://localhost:47696/api/teacher/getallocationclass?id=${data}`
  );
  return response;
};

export const getSubjectAllocationService = async (data) => {
  const response = await axios.get(
    `http://localhost:47696/api/teacher/getallocationsubject?id=${data}`
  );
  return response;
};
