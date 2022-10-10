import axios from "./axios";

export const peticionAlice = async (data) => {
  const response = await axios.post("/api", data);
  return { response: response.data, IA: "alice" };
};

export const peticionMark = async (data) => {
  const response = await axios.post("/api2", data);
  return { response: response.data, IA: "mark" };
};
