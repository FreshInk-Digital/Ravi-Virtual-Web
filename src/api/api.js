import axios from "axios";
import { ACCESS_TOKEN } from "constants/constants";

// Set the baseURL based on the environment
const baseURL = process.env.NODE_ENV === "production"
  ? "https://backend.ravimoova.co.tz"
  : "http://127.0.0.1:8080";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
