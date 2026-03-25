"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function AddRecordPage() {
  const { id } = useParams();
  const router = useRouter();

  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");

  const submitRecord = async () => {
    await axios.post("http://localhost:5050/api/records", {
      patientId: id,
      diagnosis,
      prescription,
      doctorName: "Dr. Smith",
    });

    router.push(`/patient/${id}`);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "500px" }}>
      <h2 style={{ color: "#c62828" }}>Add Record</h2>

      <input
        placeholder="Diagnosis"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        style={input}
      />

      <input
        placeholder="Prescription"
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        style={input}
      />

      <button style={btn} onClick={submitRecord}>
        Save Record
      </button>
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
};

const btn = {
  marginTop: "16px",
  background: "#c62828",
  color: "#fff",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
};