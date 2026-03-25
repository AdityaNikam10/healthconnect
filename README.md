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


# Authorization Middleware – RBAC Implementation

## 📌 Overview

This project implements **Role-Based Access Control (RBAC)** using custom authorization middleware.
The middleware ensures that only users with appropriate roles can access protected routes.

---

## 🔐 RBAC Roles

| Role      | Permissions                                |
| --------- | ------------------------------------------ |
| Admin     | Full access (Create, Read, Update, Delete) |
| Volunteer | Limited access (Read, Update)              |
| User      | Basic access (Read only)                   |

---

## ⚙️ Middleware Logic

The authorization middleware works as follows:

1. Extract user role from request (JWT/session)
2. Compare role with required route permissions
3. Allow request if role is authorized
4. Deny request if role is not authorized

### Example Middleware

```js
const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};
```

---

## ✅ Allowed Access Example

Route:

```
GET /admin/dashboard
```

Allowed Roles:

* Admin

Result:

* Admin → Access Granted
* Volunteer → Access Denied
* User → Access Denied

---

## ❌ Denied Access Example

Route:

```
DELETE /users
```

Allowed Roles:

* Admin

Result:

* Volunteer tries → 403 Forbidden

---

## 🛡️ Least Privilege Principle

This project follows the **Least Privilege Principle**, meaning:

* Users only get **minimum permissions required**
* Prevents security risks
* Improves system safety

---

## 🚀 How to Run

```bash
npm install
npm start
```

---

## 📌 Future Improvements

* Dynamic role management
* Permission-based RBAC (not only role-based)
* Admin dashboard for role control

