import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
    bloodGroup: String,
    status: {
      type: String,
      enum: ["waiting", "in-progress", "done"],
      default: "waiting",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Patient", patientSchema);