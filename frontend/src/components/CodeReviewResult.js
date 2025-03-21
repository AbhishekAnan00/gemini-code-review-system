"use client";
export default function CodeReviewResult({ messages, messagesEndRef }) {
  return (
    <div>
      {messages.map((msg, index) => {
        const isUser = msg.sender === "user";
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: isUser ? "flex-end" : "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "1rem",
                borderRadius: "10px",
                background: isUser ? "rgba(0, 123, 255, 0.8)" : "rgba(108, 117, 125, 0.8)",
                color: "#fff",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
