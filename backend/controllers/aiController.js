import { analyzeComplaint } from "../utils/aiHelper.js";

export const analyzeComplaintAI = async (req, res) => {
  try {
    const { description } = req.body;

    const result = await analyzeComplaint(description);

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};