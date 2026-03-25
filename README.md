# HealthConnect Project Initialization

## 📌 Project Overview
HealthConnect is a web application designed to connect volunteers and users in need of medical and emergency assistance. This project follows a scalable folder structure to ensure maintainability and team collaboration.

---

## 📁 Folder Structure Explanation

### src/app
- Contains application routing and main pages.
- Handles navigation and layout structure.
- Example:
  - Home page
  - Dashboard
  - Login/Register pages

### src/components
- Contains reusable UI components.
- Helps maintain DRY principle.
- Example:
  - Navbar
  - Button
  - Card
  - Modal

### src/lib
- Contains utility functions and business logic.
- Helps separate logic from UI.
- Example:
  - API calls
  - Authentication helpers
  - Validation logic

---

## 🚀 Why This Structure?

- Improves **code readability**
- Helps **team collaboration**
- Makes **feature addition easier**
- Supports **scalability for large projects**

---

## 🛠️ How to Run Locally

```bash
npm install
npm run dev



---

# ⚙️ File Upload Flow (Pre-Signed URL)

The upload process follows these steps:

1. Client requests a pre-signed upload URL from the backend.
2. Backend generates a temporary secure URL.
3. Client uploads the file directly to cloud storage using this URL.
4. The storage service validates and stores the file.

### Flow Diagram

Client → Backend → Generate Pre-Signed URL → Upload to Storage → File Stored

---

# 📂 File Validation

To ensure safe uploads, the API validates files before generating upload URLs.

### Validation Checks

* Allowed file types (e.g., JPG, PNG, PDF)
* File size limits
* File name sanitization

### Example Validation Code

```js
const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

if (!allowedTypes.includes(fileType)) {
  return res.status(400).json({ message: "Invalid file type" });
}
```

---

# 🔐 Security Considerations

This system improves security by:

* Using **temporary pre-signed URLs**
* Preventing direct server uploads
* Restricting **file types**
* Limiting **upload permissions**
* Preventing unauthorized access

Pre-signed URLs expire after a short time to prevent misuse.

---

# 🚀 How to Run the Project

Install dependencies:

npm install

Start the server:

npm run dev

---

# 📌 Future Improvements

* Add file size validation
* Add malware scanning
* Implement user authentication before uploads

