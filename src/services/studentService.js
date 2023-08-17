import axios from "axios";

export const testService = async (data) => {
  const response = await axios.post(
    "http://localhost:47696/api/student/addstudent",
    data
  );
  return response;
};

export const updateStudentService = async (data) => {
  const response = await axios.put(
    "http://localhost:47696/api/student/updatestudent",
    data
  );
  return response;
};

export const deleteStudentService = async (data) => {
  const response = await axios.delete(
    `http://localhost:47696/api/student/deletestudent?studentId=${data}`
  );
  return response;
};

export const getStudentSevice = async (data) => {
  const response = await axios.get(
    `http://localhost:47696/api/student/getstudent?studentId=${data}`
  );
  return response;
};
