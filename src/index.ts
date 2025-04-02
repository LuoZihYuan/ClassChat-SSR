import express from "express";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const server = createServer(app);
const io = new Server(server);
const __dirname = dirname(fileURLToPath(import.meta.url));

declare module "socket.io" {
  interface Socket {
    nickname: string;
  }
}

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../index.html"));
});

// Creative Feature: Random nickname generator
const adjectives = [
  "Happy",
  "Silly",
  "Brave",
  "Clever",
  "Lazy",
  "Quick",
  "Charming",
];
const animals = [
  "Panda",
  "Tiger",
  "Eagle",
  "Fox",
  "Koala",
  "Penguin",
  "Elephant",
];
function getRandomNickname() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adjective} ${animal}`;
}

io.on("connection", (socket) => {
  // Assign a random nickname on connection.
  socket.nickname = getRandomNickname();
  console.log(socket.nickname, "connected");
  io.emit("chat message", `${socket.nickname} joined the chat.`);

  socket.on("chat message", (msg) => {
    io.emit("chat message", `${socket.nickname}: ${msg}`);
  });

  socket.on("disconnect", () => {
    io.emit("chat message", `${socket.nickname} left the chat.`);
    console.log(socket.nickname, "disconnected");
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
