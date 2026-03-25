"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>HealthConnect</h2>

        <div style={styles.navLinks}>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>Services</span>
          <span style={styles.link}>Doctors</span>
          <span style={styles.link}>Contact</span>

          <button
            style={styles.loginBtn}
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>


      {/* HERO SECTION */}
      <div style={styles.hero}>

        {/* LEFT TEXT */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            Your Health Is <br /> Our Priority
          </h1>

          <p style={styles.subtitle}>
            HealthConnect is a modern hospital management system that helps
            doctors and reception manage patient records efficiently and securely.
          </p>

          <button
            style={styles.cta}
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>
        </div>


        {/* IMAGE */}
        <img
          src="/doctor.png"
          alt="doctor"
          style={styles.heroImage}
        />

      </div>

    </div>
  );
}



const styles = {

  container: {
    minHeight: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    background: "#ffffff"
  },


  /* NAVBAR */

  navbar: {
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 80px",
    background: "#ffffff",
    borderBottom: "1px solid #eee"
  },

  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#d32f2f"
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "30px"
  },

  link: {
    fontSize: "15px",
    color: "#333",
    cursor: "pointer"
  },

  loginBtn: {
    padding: "10px 24px",
    background: "#d32f2f",   // RED
    border: "none",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer"
  },


  /* HERO */

  hero: {
    position: "relative",
    height: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "80px",
    overflow: "hidden",
    background: "#ffffff"
  },


  /* LEFT TEXT */

  left: {
    width: "45%",
    zIndex: 2
  },

  title: {
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1e293b"
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "35px",
    maxWidth: "520px",
    color: "#475569"
  },

  cta: {
    padding: "14px 40px",
    fontSize: "16px",
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },


  /* IMAGE */

  heroImage: {
  position: "absolute",
  right: "60px",
  top: "50%",
  transform: "translateY(-50%)",
  height: "80%",
  maxHeight: "650px",
  objectFit: "contain"
}

};