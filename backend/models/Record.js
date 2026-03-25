import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    diagnosis: String,
    prescription: String,
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);