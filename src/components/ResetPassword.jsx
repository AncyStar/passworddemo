import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/passwordReset";
import "bootstrap/dist/css/bootstrap.min.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await resetPassword(token, password);
      setMessage("Password reset successfully!");
      setSuccess(true);
      setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
    } catch (error) {
      console.log(error);
      setMessage("Error resetting password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Reset Your Password</h2>
        {message && (
          <div
            className={`alert ${success ? "alert-success" : "alert-danger"}`}
          >
            {message}
          </div>
        )}
        {!success && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
