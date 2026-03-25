const API = process.env.NEXT_PUBLIC_API_URL;

// Patients
export const addPatient = async (data) =>
  fetch(`${API}/patients/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

// Appointments
export const addToOPD = async (patientId) =>
  fetch(`${API}/appointments/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ patientId }),
  }).then(res => res.json());

export const getOPDQueue = async () =>
  fetch(`${API}/appointments`).then(res => res.json());

export const completeAppointment = async (id) =>
  fetch(`${API}/appointments/${id}/complete`, {
    method: "PUT",
  }).then(res => res.json());