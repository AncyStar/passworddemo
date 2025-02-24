import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm rounded">
          <div className="container-fluid">
            <a className="navbar-brand " href="/">
              Password Reset App
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/forgot-password">
                    Forgot Password
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/forgot-password" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
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
