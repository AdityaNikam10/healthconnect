const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// 1️⃣ Add patient to OPD queue (Reception)
router.post("/add", async (req, res) => {
  try {
    const appointment = await Appointment.create({
      patientId: req.body.patientId,
    });
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2️⃣ Get OPD queue (Doctor)
router.get("/", async (req, res) => {
  try {
    const queue = await Appointment.find({ status: "waiting" })
      .populate("patientId")
      .sort({ createdAt: 1 });

    res.json(queue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3️⃣ Mark appointment completed
router.put("/:id/complete", async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, {
      status: "completed",
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;