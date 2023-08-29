import express, { json } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server);

// Middleware
app.use(json()); // Parse JSON in request bodies

//socket connection initiated
io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
});

// Route
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
