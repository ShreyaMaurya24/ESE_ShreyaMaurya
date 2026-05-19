import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");



  // =========================
  // Logout Function
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logout Successful");

    navigate("/login");
  };



  return (

    <div className="navbar">

      {/* Home */}

      <Link to="/">
        Home
      </Link>



      {/* If User NOT Logged In */}

      {
        !token && (
          <>

            <Link to="/signup">
              Signup
            </Link>

            <Link to="/login">
              Login
            </Link>

          </>
        )
      }



      {/* If User Logged In */}

      {
        token && (
          <>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/register-complaint">
              Register Complaint
            </Link>

            <Link to="/complaints">
              Complaints
            </Link>

            <button onClick={handleLogout}>
              Logout
            </button>

          </>
        )
      }

    </div>
  );
};

export default Navbar;