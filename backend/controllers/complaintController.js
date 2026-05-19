import Complaint from "../models/Complaint.js";


// ============================
// Add Complaint
// ============================

export const addComplaint = async (req, res) => {

  try {

    const {
      name,
      email,
      title,
      description,
      category,
      location,
      priority,
      department,
      summary,
      aiResponse,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !title ||
      !description ||
      !category ||
      !location
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create Complaint
    const complaint = await Complaint.create({
      name,
      email,
      title,
      description,
      category,
      location,
      priority,
      department,
      summary,
      aiResponse,
    });

    res.status(201).json({
      success: true,
      message: "Complaint Added Successfully",
      data: complaint,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// ============================
// Get All Complaints
// ============================

export const getComplaints = async (req, res) => {

  try {

    const complaints = await Complaint.find();

    res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// ============================
// Update Complaint Status
// ============================

export const updateComplaintStatus = async (req, res) => {

  try {

    const complaint =
      await Complaint.findById(req.params.id);

    if (!complaint) {

      return res.status(404).json({
        success: false,
        message: "Complaint Not Found",
      });
    }

    complaint.status =
      req.body.status || complaint.status;

    const updatedComplaint =
      await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint Status Updated",
      data: updatedComplaint,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// ============================
// Search Complaint By Location
// ============================

export const searchComplaintByLocation =
  async (req, res) => {

    try {

      const complaints = await Complaint.find({

        location: {
          $regex: req.params.location,
          $options: "i",
        },

      });

      res.status(200).json({
        success: true,
        count: complaints.length,
        data: complaints,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};




// ============================
// Delete Complaint
// ============================

export const deleteComplaint = async (req, res) => {

  try {

    const complaint =
      await Complaint.findById(req.params.id);

    if (!complaint) {

      return res.status(404).json({
        success: false,
        message: "Complaint Not Found",
      });
    }

    await complaint.deleteOne();

    res.status(200).json({
      success: true,
      message: "Complaint Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};