import { useState } from "react";

import API from "../services/api";

const RegisterComplaint = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const [aiResult, setAiResult] = useState(null);

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // =========================
      // AI Analyze
      // =========================
      const aiResponse = await API.post(
        "/ai/analyze",
        {
          description: formData.description,
        }
      );

      console.log(aiResponse.data);

      setAiResult(aiResponse.data.data);



      // =========================
      // Save Complaint
      // =========================
      const complaintData = {
        ...formData,

        priority: aiResponse.data.data.priority,

        department: aiResponse.data.data.department,

        summary: aiResponse.data.data.summary,

        aiResponse: aiResponse.data.data.response,
      };

      const response = await API.post(
        "/complaints",
        complaintData
      );

      alert(response.data.message);

      console.log(response.data);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };



  return (
    <div style={{ padding: "30px" }}>

      <h1>Register Complaint</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Complaint Description"
          rows="5"
          cols="40"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Complaint Category"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>



      {/* ========================= */}
      {/* AI Result */}
      {/* ========================= */}

      {
        aiResult && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid gray",
            }}
          >

            <h2>AI Analysis Result</h2>

            <p>
              <strong>Priority:</strong>
              {" "}
              {aiResult.priority}
            </p>

            <p>
              <strong>Department:</strong>
              {" "}
              {aiResult.department}
            </p>

            <p>
              <strong>Summary:</strong>
              {" "}
              {aiResult.summary}
            </p>

            <p>
              <strong>Auto Response:</strong>
              {" "}
              {aiResult.response}
            </p>

          </div>
        )
      }

    </div>
  );
};

export default RegisterComplaint;