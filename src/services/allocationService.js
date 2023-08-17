import axios from "axios";

export const allocateClassService = async (data) => {
  const response = await axios.post(
    "http://localhost:47696/api/allocate/classroom",
    data
  );
  return response;
};

export const allocateSubjectService = async (data) => {
  const response = await axios.post(
    "http://localhost:47696/api/allocate/subject",
    data
  );
  return response;
};
//special case when delete
export const deallocateClassService = async (data) => {
  const response = await axios.delete(
    "http://localhost:47696/api/allocate/removeclassroom",
    { data: data }
  );
  return response;
};

export const deallocateSubjectService = async (data) => {
  const response = await axios.delete(
    "http://localhost:47696/api/allocate/removesubject",
    { data: data }
  );
  return response;
};
