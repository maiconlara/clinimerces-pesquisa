/* eslint-disable react-hooks/rules-of-hooks */

import useCookie from "@/utils/hooks/useCookies";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const { getCookie } = useCookie();

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

api.interceptors.request.use((config) => {
    const token = getCookie("usu_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

export default api;
