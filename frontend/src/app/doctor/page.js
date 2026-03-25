"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DoctorQueuePage() {
  const [patients, setPatients] = useState([]);
  const router = useRouter();

  const fetchPatients = async () => {
    const res = await axios.get("http://localhost:5050/api/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const cycleStatus = async (patient) => {
    const flow = ["waiting", "in-progress", "done"];
    const current = patient.status || "waiting";
    const next = flow[(flow.indexOf(current) + 1) % flow.length];

    await axios.put(
      `http://localhost:5050/api/patients/${patient._id}/status`,
      { status: next }
    );

    fetchPatients();
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ color: "#c62828" }}>Doctor OPD Queue</h2>

      <div style={grid}>
        {patients.map((p) => (
          <div key={p._id} style={card}>
            <h3
              style={name}
              onClick={() => router.push(`/patient/${p._id}`)}
            >
              {p.name}
            </h3>

            <p>Age: {p.age}</p>
            <p>Gender: {p.gender}</p>
            <p>Blood: {p.bloodGroup}</p>

            <span
              style={{ ...badge, ...badgeColor(p.status) }}
              onClick={() => cycleStatus(p)}
            >
              {(p.status || "waiting").toUpperCase()}
            </span>

            <button
              style={button}
              onClick={() => router.push(`/doctor/add-record/${p._id}`)}
            >
              Add Record
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  padding: "16px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const name = {
  color: "#c62828",
  cursor: "pointer",
};

const badge = {
  display: "inline-block",
  marginTop: "10px",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold",
  cursor: "pointer",
};

const button = {
  marginTop: "14px",
  width: "100%",
  padding: "10px",
  background: "#c62828",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};

function badgeColor(status = "waiting") {
  if (status === "waiting") return { background: "#ff9800", color: "#fff" };
  if (status === "in-progress") return { background: "#2196f3", color: "#fff" };
  if (status === "done") return { background: "#4caf50", color: "#fff" };
}