import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import complaintRoutes from "./routes/complaintRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });


// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


// Routes
app.use("/api/complaints", complaintRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);


// Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});