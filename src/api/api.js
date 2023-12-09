//give me axios and I'll give you a nice api

import axios from "axios";

const FT_API = axios.create({
  baseURL: "https://api.coachingzona.uz/api/v1/",
  params: {
    key: import.meta.env.VITE_YT_API_KEY,
  },
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "",
  },
});

export default FT_API;
