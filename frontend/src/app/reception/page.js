"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ReceptionPage() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
  });

  const fetchPatients = async () => {
    const res = await axios.get("http://localhost:5050/api/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const addPatient = async () => {
    await axios.post("http://localhost:5050/api/patients", form);
    setForm({ name: "", age: "", gender: "", bloodGroup: "" });
    fetchPatients();
  };

  return (
    <>
      <h2 style={{ color: "#c62828" }}>OPD Reception</h2>

      <div style={{ maxWidth: 400, marginBottom: 24 }}>
        {["name", "age", "gender", "bloodGroup"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            style={{
              width: "100%",
              padding: 10,
              marginBottom: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />
        ))}

        <button
          onClick={addPatient}
          style={{
            width: "100%",
            background: "#c62828",
            color: "white",
            border: "none",
            padding: 10,
            borderRadius: 6,
          }}
        >
          Add Patient
        </button>
      </div>

      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}