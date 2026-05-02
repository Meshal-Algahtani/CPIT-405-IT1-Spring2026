import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        <strong>Link Shrinker</strong> is a simple URL shortening application
        built with React.js as part of CPIT-405 Internet Applications at King
        Abdulaziz University.
      </p>
      <p style={styles.text}>
        Our goal is to make link sharing easier by converting long, complex URLs
        into short, clean, and memorable links — with optional custom aliases.
      </p>
      <div style={styles.card}>
        <h2 style={styles.subheading}>✨ Features</h2>
        <ul style={styles.list}>
          <li>Instant URL shortening</li>
          <li>Custom alias support</li>
          <li>Delete links you no longer need</li>
          <li>Clean and responsive UI</li>
        </ul>
      </div>
      <div style={styles.card}>
        <h2 style={styles.subheading}>🛠 Built With</h2>
        <ul style={styles.list}>
          <li>React.js + Vite</li>
          <li>React Router v6</li>
          <li>useState hook</li>
          <li>Inline CSS styling</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "sans-serif",
  },
  heading: { fontSize: "2rem", color: "#4f46e5", marginBottom: "16px" },
  text: { color: "#444", lineHeight: "1.7", marginBottom: "16px" },
  card: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
  },
  subheading: { fontSize: "1.2rem", color: "#333", marginBottom: "10px" },
  list: { paddingLeft: "20px", color: "#555", lineHeight: "2" },
};
