//give me axios and I'll give you a nice api

import axios from "axios";

const FT_API = axios.create({
  baseURL: "https://swagger.ccenter.uz/api/v1/",
  params: {
    key: import.meta.env.VITE_YT_API_KEY,
  },
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    access_token: localStorage.getItem("token"),
  },
});

export const updateHeadersWithToken = () => {
  const newToken = localStorage.getItem("token");
  FT_API.defaults.headers.common["Authorization"] = "Bearer " + newToken;
  FT_API.defaults.headers.common["access_token"] = newToken;
};

export default FT_API;
