import axios from "axios";

// Use API base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Function to request a password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

// Function to reset the password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/reset-password`, // Removed token from URL
      { token, newPassword }, // Send token in the request body
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
