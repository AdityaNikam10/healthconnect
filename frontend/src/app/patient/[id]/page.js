"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function PatientRecordsPage() {
  const { id } = useParams(); // ✅ CORRECT
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchRecords();
  }, [id]);

  const fetchRecords = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5050/api/records/${id}`
      );
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading records...</p>;

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ color: "#c62828" }}>Patient Records</h2>

      {records.length === 0 && <p>No records found</p>}

      <div style={grid}>
        {records.map((r) => (
          <div key={r._id} style={card}>
            <h4>{r.diagnosis}</h4>
            <p><b>Doctor:</b> {r.doctorName}</p>
            <p><b>Prescription:</b> {r.prescription}</p>
            <p style={{ fontSize: "12px", color: "#777" }}>
              {new Date(r.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "16px",
};

const card = {
  border: "1px solid #ddd",
  padding: "16px",
  borderRadius: "8px",
  background: "#fff",
};