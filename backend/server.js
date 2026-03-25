import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import patientRoutes from "./routes/patients.js";
import recordRoutes from "./routes/records.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/patients", patientRoutes);
app.use("/api/records", recordRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.listen(5050, () => {
  console.log("Server running on http://localhost:5050");
});