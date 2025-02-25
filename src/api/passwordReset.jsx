import axios from "axios";

export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(
      "https://password-reset-3inm.onrender.com/forgot-password", // Replace with your Render backend URL
      { email }
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};
