"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("message");
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    try {
      const { data } = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.log("Error in chat:", error);
    }
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem", textAlign: "center" }}>
     
      {!isOpen && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "0.85rem",
            marginBottom: "5px",
            display: "inline-block",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Chat with AI
        </div>
      )}

      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            position: "relative",
          }}
        >
          💬
        </button>
      ) : (
        <div
          style={{
            width: "350px",
            height: "500px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right, #4A90E2, #1E3A8A)",
              padding: "1rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://th.bing.com/th/id/OIP.FiL1XNd2mS2P-un7uoby2wHaHa?w=155&h=192&c=7&r=0&o=5&pid=1.7"
                alt="Bot"
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
              />
              <div>
                <strong>AI Chat</strong>
                <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.8 }}>We’re online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
              background: "#f7f7f7",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  background: msg.sender === "ai" ? "#e6f2ff" : "#dcf8c6",
                  color: "#333",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  alignSelf: msg.sender === "ai" ? "flex-start" : "flex-end",
                  maxWidth: "75%",
                  textAlign: msg.sender === "ai" ? "left" : "right",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "0.75rem",
              borderTop: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              background: "#fff",
            }}
          >
          
            <button
              style={{
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              📎
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your message..."
              style={{
                flex: 1,
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "10px",
                outline:"none",
                color:"black"
              }}
            />

            <button
              onClick={handleSend}
              style={{
                background: "#4A90E2",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "50%",
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "1.2rem",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}