import axios from "axios";

 //Может быть нужно где то еще?
const setBaseURL = () => {
  axios.defaults.headers.post["Content-Type"] = "aplication/json";
  axios.defaults.headers.get["Content-Type"] = "aplication/json";
  axios.defaults.baseURL = "https://raschitalochka.goit.co.ua";
};

const setAuthHeader = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
//--------------------------------

export const register = async (data) => {
  setBaseURL();
  const response = await axios.post("/api/register", data);
  return response;
};

export const logIn = async (data) => {
    setBaseURL();
    const response = await axios.post("/api/login", data);
    return response;
  };

export const getFinanceTableById = async (userId, token) => {
  setBaseURL();
  setAuthHeader(token);
  const response = await axios.get(`/api/finance/${userId}`);
  return response;
};

export const postIncomeCost = async (userId, token, finance) => {
  setBaseURL();
  setAuthHeader(token);
  const response = axios.post(`/api/finance/${userId}`, finance);
  return response;
};
