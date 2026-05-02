import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About us</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#8b7355",
    padding: "12px 24px",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontSize: "1rem",
    padding: "8px 12px",
    backgroundColor: "#a0826d",
    borderRadius: "4px",
  },
};
