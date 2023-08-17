import axios from "axios";

export const getAllClassRoom = async () => {
  const response = await axios.get("http://localhost:47696/api/getclasses");
  return response;
};

export const addClassRoomService = async (data) => {
  const response = await axios.post(
    `http://localhost:47696/api/addclass?className=${data}`
  );
  return response;
};
