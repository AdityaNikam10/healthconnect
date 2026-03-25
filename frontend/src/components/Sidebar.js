"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    { name: "Dashboard", href: "/reception" },
    { name: "Patients", href: "/reception" },
    { name: "OPD Queue", href: "/reception" },
    { name: "Doctor Queue", href: "/doctor" },
  ];

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>HealthConnect</div>

      <nav>
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              ...styles.link,
              ...(pathname === item.href ? styles.active : {}),
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#c62828",
    color: "#fff",
    minHeight: "100vh",
    padding: "16px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  link: {
    display: "block",
    padding: "10px 14px",
    marginBottom: "8px",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  active: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};