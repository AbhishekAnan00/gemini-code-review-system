"use client";
import { useState } from "react";
import axios from "axios";

export default function CodeReviewForm({ setMessages }) {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    // Append user's code message
    setMessages((prev) => [...prev, { sender: "user", text: code }]);
    try {
      const { data } = await axios.post("http://localhost:5000/api/review", { code });
      // Append assistant's review message
      setMessages((prev) => [...prev, { sender: "assistant", text: data.review }]);
    } catch (error) {
      console.error("Error in code review:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: "Error fetching review. Please try again." },
      ]);
    }
    setCode("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "0.5rem",
        width: "100%",
      }}
    >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={4}
        style={{
          flex: 1,
          padding: "0.75rem",
          fontFamily: "monospace",
          fontSize: "0.9rem",
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
          padding: "0.75rem 1rem",
          background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "background 0.3s",
          alignSelf: "flex-end",
        }}
        onMouseOver={(e) =>
          (e.target.style.background = "linear-gradient(90deg, #ff4b2b, #ff416c)")
        }
        onMouseOut={(e) =>
          (e.target.style.background = "linear-gradient(90deg, #ff416c, #ff4b2b)")
        }
      >
        Review Code
      </button>
    </form>
  );
}
