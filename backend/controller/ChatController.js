import { getChatResponse } from "../service/ChatService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await getChatResponse(message);
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// import { getChatResponse } from "../services/ChatService.js";

// export const chatWithAI = async (req, res) => {
//   try {
//     const { message } = req.body;
//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }
    
//     const aiResponse = await getChatResponse(message);
//     res.json({ reply: aiResponse });

//   } catch (error) {
//     console.error("Chat error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

