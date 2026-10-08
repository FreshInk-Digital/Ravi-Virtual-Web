import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8080";

const api = axios.create({
  baseURL,
});


export default api;
