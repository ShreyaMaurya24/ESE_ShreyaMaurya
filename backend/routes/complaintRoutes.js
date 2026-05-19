import express from "express";

import {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  searchComplaintByLocation,
  deleteComplaint,
} from "../controllers/complaintController.js";

const router = express.Router();


// Add Complaint
router.post("/", addComplaint);


// Get All Complaints
router.get("/", getComplaints);


// Update Complaint Status
router.put("/:id", updateComplaintStatus);


// Search Complaint By Location
router.get(
  "/search/:location",
  searchComplaintByLocation
);


// Delete Complaint
router.delete("/:id", deleteComplaint);


export default router;