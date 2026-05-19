import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute
from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RegisterComplaint
from "./pages/RegisterComplaint";
import ComplaintList
from "./pages/ComplaintList";
import Dashboard
from "./pages/Dashboard";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />



        {/* Protected Routes */}

        <Route
          path="/dashboard"

          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />



        <Route
          path="/register-complaint"

          element={
            <ProtectedRoute>

              <RegisterComplaint />

            </ProtectedRoute>
          }
        />



        <Route
          path="/complaints"

          element={
            <ProtectedRoute>

              <ComplaintList />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;