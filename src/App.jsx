import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/Login";
import Signup from "./components/SingnUp";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm rounded">
          <div className="container-fluid">
            <Link className="navbar-brand">Password Reset App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/forgot-password">
                    Forgot Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reset-password">
                    Reset Password
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<h2 className="text-center">404 - Page Not Found</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
