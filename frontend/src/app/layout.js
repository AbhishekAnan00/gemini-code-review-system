import ChatBot from "@/components/ChatBot";
import "./globals.css";

export const metadata = {
  title: "AI Code Review System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "0",
          fontFamily: "'Inter', sans-serif",
          background: "linear-gradient(135deg, #1e1e2f, #13131f)",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          {children}
        </main>
        
        {/* Chatbot Positioned at Bottom Right */}
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 1000,
          }}
        >
          <ChatBot />
        </div>
      </body>
    </html>
  );
}