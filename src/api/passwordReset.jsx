import axios from "axios";

// Function to request a password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(
      "https://password-reset-3inm.onrender.com/forgot-password",
      { email }
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

// Function to actually reset the password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(
      `https://password-reset-3inm.onrender.com/reset-password/${token}`,
      { token, newPassword },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
