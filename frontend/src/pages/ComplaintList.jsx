import { useEffect, useState } from "react";

import API from "../services/api";

const ComplaintList = () => {

  const [complaints, setComplaints] =
    useState([]);

  const [searchLocation, setSearchLocation] =
    useState("");



  // =========================
  // Fetch Complaints
  // =========================

  const fetchComplaints = async () => {

    try {

      const response =
        await API.get("/complaints");

      setComplaints(response.data.data);

    } catch (error) {

      console.log(error);
    }
  };



  // =========================
  // Delete Complaint
  // =========================

  const deleteComplaint = async (id) => {

    try {

      await API.delete(
        `/complaints/${id}`
      );

      alert("Complaint Deleted");

      fetchComplaints();

    } catch (error) {

      console.log(error);
    }
  };



  // =========================
  // Update Status
  // =========================

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await API.put(
        `/complaints/${id}`,
        {
          status,
        }
      );

      alert("Status Updated");

      fetchComplaints();

    } catch (error) {

      console.log(error);
    }
  };



  // =========================
  // Search By Location
  // =========================

  const searchComplaint = async () => {

    try {

      const response =
        await API.get(
          `/complaints/search/${searchLocation}`
        );

      setComplaints(response.data.data);

    } catch (error) {

      console.log(error);
    }
  };



  useEffect(() => {

    fetchComplaints();

  }, []);




  return (
    <div style={{ padding: "20px" }}>

      <h1>Complaint List</h1>



      {/* ========================= */}
      {/* Search */}
      {/* ========================= */}

      <input
        type="text"
        placeholder="Search by location"
        value={searchLocation}
        onChange={(e) =>
          setSearchLocation(e.target.value)
        }
      />

      <button onClick={searchComplaint}>
        Search
      </button>

      <button onClick={fetchComplaints}>
        Reset
      </button>



      {/* ========================= */}
      {/* Complaint Cards */}
      {/* ========================= */}

      {
        complaints.map((complaint) => (

          <div
            key={complaint._id}

            style={{
              border: "1px solid gray",
              padding: "20px",
              marginTop: "20px",
            }}
          >

            <h3>
              {complaint.title}
            </h3>

            <p>
              <strong>Name:</strong>
              {" "}
              {complaint.name}
            </p>

            <p>
              <strong>Email:</strong>
              {" "}
              {complaint.email}
            </p>

            <p>
              <strong>Description:</strong>
              {" "}
              {complaint.description}
            </p>

            <p>
              <strong>Category:</strong>
              {" "}
              {complaint.category}
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              {complaint.location}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}
              {complaint.status}
            </p>

            <p>
              <strong>Priority:</strong>
              {" "}
              {complaint.priority}
            </p>

            <p>
              <strong>Department:</strong>
              {" "}
              {complaint.department}
            </p>

            <p>
              <strong>Summary:</strong>
              {" "}
              {complaint.summary}
            </p>

            <p>
              <strong>AI Response:</strong>
              {" "}
              {complaint.aiResponse}
            </p>



            {/* ========================= */}
            {/* Update Status */}
            {/* ========================= */}

            <select
              onChange={(e) =>
                updateStatus(
                  complaint._id,
                  e.target.value
                )
              }
            >

              <option>
                Change Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Resolved">
                Resolved
              </option>

            </select>



            {/* ========================= */}
            {/* Delete */}
            {/* ========================= */}

            <button
              onClick={() =>
                deleteComplaint(
                  complaint._id
                )
              }

              style={{
                marginLeft: "10px",
              }}
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default ComplaintList;