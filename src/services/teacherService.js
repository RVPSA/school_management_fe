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
