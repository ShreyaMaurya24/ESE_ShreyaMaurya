import axios from "axios";

const API = axios.create({
  baseURL: "https://ese-backend-vt0c.onrender.com/api",
});

export default API;