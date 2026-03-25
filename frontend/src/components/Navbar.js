"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [role, setRole] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    setRole(savedRole);
  }, [pathname]); // 🔥 updates LIVE when route changes

  // ❌ Hide navbar on login page
  if (pathname === "/login") return null;

  const logout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <nav
      style={{
        background: "#111",
        color: "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>HealthConnect</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        {role && (
          <span
            style={{
              background: "#444",
              padding: "6px 12px",
              borderRadius: "6px",
              textTransform: "uppercase",
              fontSize: "12px",
            }}
          >
            {role}
          </span>
        )}

        <button
          onClick={logout}
          style={{
            background: "red",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}