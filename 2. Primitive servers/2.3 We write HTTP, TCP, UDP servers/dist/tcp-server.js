"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
let server = net_1.default.createServer((socket) => {
    console.log("Client connected.");
    socket.on("data", (data) => {
        let currentTime = new Date().toLocaleTimeString();
        console.log(`[${currentTime}] Received from client: ${data}`);
        // return to client
        socket.write(data);
    });
    socket.on("end", () => {
        console.log("Client disconnected.");
    });
});
let port = 3000;
server.listen(port, () => {
    console.log(`Server listens on port ${port}`);
});
server.on("connection", (socket) => {
    let clientIP = socket.remoteAddress;
    console.log("Client IP: " + clientIP);
});
server.on("connection", (socket) => {
    console.log("The server accepted the new connection.");
});
