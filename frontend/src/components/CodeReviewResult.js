"use client";
export default function CodeReviewResult({ review }) {
  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "6px",
        border: "none",
        fontFamily: "monospace",
        fontSize: "1rem",
        whiteSpace: "pre-wrap",
        overflowX: "auto",
        color: "#fff",
      }}
    >
      <h2
        style={{
          marginBottom: "1rem",
          color: "#fff",
          fontSize: "1.5rem",
        }}
      >
        Review Result
      </h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          color: "#fff",
          padding: "1rem",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "6px",
          overflowX: "auto",
          maxWidth: "100%",
        }}
      >
        {review}
      </pre>
    </div>
  );
}