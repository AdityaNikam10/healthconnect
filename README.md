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



# Redis Caching Layer Implementation

## 📌 Overview

This project implements a **Redis caching layer** to improve API performance and reduce database load.
The caching follows the **Cache-Aside (Lazy Loading) strategy**.

---

# ⚙️ Caching Strategy (Cache-Aside)

Flow:

1. Client requests data
2. Server checks Redis cache
3. If cache exists → return cached data (Cache Hit)
4. If cache missing → fetch from database (Cache Miss)
5. Store result in Redis with TTL
6. Return response

---

# 📦 Cached Resources

Currently cached:

* User profile data
* Dashboard statistics
* Frequently accessed API responses

---

# ⏳ TTL Policy

* User Data → 5 minutes
* Dashboard Data → 2 minutes
* Static Resources → 10 minutes

TTL ensures:

* Fresh data
* Automatic cache invalidation

---

# 🔄 Cache Invalidation Strategy

Cache is cleared when:

* User updates profile
* Admin updates dashboard data
* Resource is deleted

Example:

```js
await redis.del(`user:${userId}`);
```

---

# 💻 Redis Integration Example

```js
const cachedData = await redis.get(`user:${id}`);

if (cachedData) {
  return res.json(JSON.parse(cachedData));
}

const user = await db.findUser(id);
await redis.set(`user:${id}`, JSON.stringify(user), "EX", 300);

res.json(user);
```

---

# 🚀 Performance Benefits

* Reduces database load
* Faster API response time
* Improves scalability
* Better user experience

---

# 🛠️ Run Project

npm install
npm run dev

Ensure Redis server is running.

