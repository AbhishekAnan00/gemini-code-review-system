"use client";
import { useState } from "react";
import CodeReviewForm from "../../components/CodeReviewForm";
import CodeReviewResult from "../../components/CodeReviewResult";

export default function CodeReviewPage() {
  const [review, setReview] = useState("");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "2rem",
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
          color: "#fff",
          marginBottom: "1.5rem",
          fontSize: "2.2rem",
          fontWeight: "bold",
        }}
      >
        AI Code Review
      </h1>

      <div
        style={{
          width: "95%",
          maxWidth: "1000px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CodeReviewForm setReview={setReview} />
        {review && <CodeReviewResult review={review} />}
      </div>
    </div>
  );
}