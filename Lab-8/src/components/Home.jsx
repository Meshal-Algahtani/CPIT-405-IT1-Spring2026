import React, { useState } from "react";

function generateShortCode() {
  return Math.random().toString(36).substring(2, 7);
}

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");

  const handleShorten = () => {
    setError("");

    if (!longUrl.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      new URL(longUrl);
    } catch {
      setError("Please enter a valid URL (include https://).");
      return;
    }

    const alias = customAlias.trim() || generateShortCode();

    const duplicate = links.find((l) => l.alias === alias);
    if (duplicate) {
      setError(`The alias "${alias}" is already taken. Choose another.`);
      return;
    }

    const newLink = {
      id: Date.now(),
      original: longUrl,
      alias: alias,
      short: `https://cpt405.co/${alias}`,
    };

    setLinks([newLink, ...links]);
    setLongUrl("");
    setCustomAlias("");
  };

  const handleDelete = (id) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleCopy = () => {
    if (links.length > 0) {
      navigator.clipboard.writeText(links[0].short);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Link Shrinker</h1>
      
      <div style={styles.card}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Long URL:</label>
          <input
            type="text"
            placeholder="https://example.com/very/long/path"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Enter short code:</label>
          <input
            type="text"
            placeholder="react101"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            style={styles.input}
          />
        </div>

        {error && <p style={styles.error}>{error}</p>}
        
        <button onClick={handleShorten} style={styles.button}>
          Shorten
        </button>
      </div>

      {links.length > 0 && (
        <div style={styles.results}>
          <div style={styles.resultCard}>
            <p style={styles.resultLabel}><strong>Short URL</strong></p>
            <p style={styles.shortUrl}>{links[0].short}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f1ed",
    minHeight: "100vh",
  },
  heading: { fontSize: "2rem", color: "#333", marginBottom: "24px", textAlign: "center" },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "32px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
    fontSize: "0.95rem",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    fontSize: "0.95rem",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 24px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "16px",
  },
  error: { color: "red", marginBottom: "10px", fontSize: "0.9rem" },
  results: { marginTop: "32px", maxWidth: "600px", margin: "32px auto 0" },
  resultCard: {
    backgroundColor: "#f5f1ed",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "24px",
  },
  resultLabel: {
    margin: "0 0 12px 0",
    fontSize: "0.95rem",
    color: "#666",
  },
  shortUrl: { color: "#333", fontSize: "1rem", margin: 0, wordBreak: "break-all" },
};
