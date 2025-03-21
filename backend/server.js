import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";
import CodeReviewRoute from "./route/CodeReviewRoute.js"
import ChatRoute from "./route/ChatRoute.js"
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import { socketHandler } from "./socket/socketHandler.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api",CodeReviewRoute)
app.use("/api",ChatRoute)

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
})

socketHandler(io);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});