import axios from "axios";

export const getAllSubjectService = async () => {
  const response = await axios.get(
    "http://localhost:47696/api/subject/getallsubject"
  );
  return response;
};

export const addSubjectService = async (data) => {
  const response = await axios.post(
    `http://localhost:47696/api/subject/addsubject?subjectName=${data}`,
    data
  );
  return response;
};
