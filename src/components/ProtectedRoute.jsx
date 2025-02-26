import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; //  Import PropTypes

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
};

// Define PropTypes for validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
