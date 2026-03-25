"use client";

export default function RecordCard({ record }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{record.title}</h3>

      <p style={styles.label}>Diagnosis</p>
      <p style={styles.text}>{record.description}</p>

      {record.prescription && (
        <>
          <p style={styles.label}>Prescription</p>
          <p style={styles.text}>{record.prescription}</p>
        </>
      )}

      <div style={styles.footer}>
        <span>
          Date: {new Date(record.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    borderLeft: "5px solid #c62828",
  },
  title: {
    marginBottom: "8px",
    color: "#c62828",
  },
  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#555",
    marginTop: "10px",
  },
  text: {
    color: "#333",
    marginTop: "4px",
  },
  footer: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#777",
  },
};