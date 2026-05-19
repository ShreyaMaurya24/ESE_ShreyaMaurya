const Dashboard = () => {

  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: "30px" }}>

      <h1>Dashboard</h1>

      {
        token ? (
          <h3>User Logged In ✅</h3>
        ) : (
          <h3>User Not Logged In ❌</h3>
        )
      }

    </div>
  );
};

export default Dashboard;