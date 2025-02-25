import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL, // For Vite
  timeout: 5000,
});

export const requestPasswordReset = async (email) => {
  try {
    const response = await API.post("/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error(
      "Error requesting password reset:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await API.post(`/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    console.error(
      "Error resetting password:",
      error.response?.data || error.message
    );
    throw error;
  }
};
