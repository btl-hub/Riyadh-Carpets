import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ROOT_URL,
  headers: { Accept: "application/json" },
});

export default apiAxios;
