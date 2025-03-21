"use client";
import { useState } from "react";
import axios from "axios";

export default function CodeReviewForm({ setReview }) {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/review", { code });
      setReview(data.review);
    } catch (error) {
      console.error("Error in code review:", error);
      setReview("Error fetching review. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={12}
        style={{
          width: "100%",
          minHeight: "200px",
          padding: "1rem",
          fontFamily: "monospace",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "none",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          resize: "vertical",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.75rem 1.5rem",
          background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.background = "linear-gradient(90deg, #ff4b2b, #ff416c)")}
        onMouseOut={(e) => (e.target.style.background = "linear-gradient(90deg, #ff416c, #ff4b2b)")}
      >
        Review Code
      </button>
    </form>
  );
}