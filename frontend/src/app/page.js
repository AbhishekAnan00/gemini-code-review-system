"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e1e2f, #13131f)",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#ffcc00",
          textShadow: "2px 2px 10px rgba(255, 204, 0, 0.3)",
        }}
      >
        🚀 Welcome to the AI Code Review System
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.5",
          marginBottom: "2rem",
          opacity: 0.9,
        }}
      >
        Submit your code snippet and get an intelligent review generated by AI.
      </p>
      <Link
        href="/review"
        style={{
          background: "#4a90e2",
          padding: "12px 24px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "1rem",
          textDecoration: "none",
          transition: "0.3s",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        ➡ Go to Code Review
      </Link>
    </div>
  );
}


// "use client";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Welcome to the AI Code Review System</h1>
//       <p>
//         Submit your code snippet and get an intelligent review generated by AI.
//       </p>
//       <Link
//         href="/review"
//         style={{ color: "#4a90e2", textDecoration: "underline" }}
//       >
//         Go to Code Review
//       </Link>
//     </div>
//   );
// }
