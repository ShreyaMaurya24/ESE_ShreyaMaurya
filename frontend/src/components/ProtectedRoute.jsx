import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");

  // If token not found
  if (!token) {

    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;