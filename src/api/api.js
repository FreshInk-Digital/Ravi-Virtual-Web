import axios from "axios";
import { ACCESS_TOKEN } from "constants/constants";

// Set the baseURL based on the environment
const baseURL = process.env.NODE_ENV === "production"
  ? "https://backend.ravimoova.co.tz"
  : "http://127.0.0.1:8080";

const api = axios.create({
  baseURL,
});

export default api;
