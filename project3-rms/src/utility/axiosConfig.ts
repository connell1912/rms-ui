import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://localhost:8765/"
});




export const axiosEmployee = axios.create({
  baseURL: "http://localhost:1234/"
});

export default axiosConfig;
