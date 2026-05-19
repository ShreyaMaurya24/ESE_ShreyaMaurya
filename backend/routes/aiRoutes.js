import express from "express";
import { analyzeComplaintAI } from "../controllers/aiController.js";

const router = express.Router();

router.post("/analyze", analyzeComplaintAI);

export default router;