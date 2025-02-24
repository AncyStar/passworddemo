import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-3inm.onrender.com", // Your backend URL
});

export const requestPasswordReset = (email) =>
  API.post("/forgot-password", { email });

export const resetPassword = (token, password) =>
  API.post(`/reset-password/${token}`, { password });
