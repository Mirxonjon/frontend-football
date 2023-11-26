//give me axios and I'll give you a nice api

import axios from "axios";

const FT_API = axios.create({
  baseURL: "https://swagger.ccenter.uz/api/v1/",
  params: {
    key: import.meta.env.VITE_YT_API_KEY,
  },
  headers: {
    access_token: localStorage.getItem("token"),
  },
});

export default FT_API;
