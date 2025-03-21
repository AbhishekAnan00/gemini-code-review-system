"use client";
import { useState, useRef, useEffect } from "react";
import CodeReviewForm from "../../components/CodeReviewForm";
import CodeReviewResult from "../../components/CodeReviewResult";

export default function CodeReviewPage() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontSize: "2.2rem",
          fontWeight: "bold",
        }}
      >
        AI Code Review
      </h1>

      {/* Container with conversation and input */}
      <div
        style={{
          width: "95%",
          maxWidth: "1000px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxHeight: "80vh", 
        }}
      >
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
          <CodeReviewResult messages={messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </div>

        <div
          style={{
            padding: "0.5rem",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <CodeReviewForm setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}
