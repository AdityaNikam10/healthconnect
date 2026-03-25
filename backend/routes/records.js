import express from "express";
import Record from "../models/Record.js";
import Patient from "../models/Patient.js";

const router = express.Router();

/* Add record */
router.post("/", async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();

    // 🔥 AUTO STATUS CHANGE
    await Patient.findByIdAndUpdate(req.body.patientId, {
      status: "in-progress",
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* Get records by patient */
router.get("/:patientId", async (req, res) => {
  const records = await Record.find({ patientId: req.params.patientId });
  res.json(records);
});

export default router;