"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
let server = http_1.default.createServer((req, res) => {
    let clientIp = req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    // Checking if the HTTP request method is POST
    if (req.method === 'POST') {
        let data = '';
        // We process data received from the client
        req.on('data', (chunk) => {
            data += chunk;
            let currentTime = new Date().toLocaleTimeString();
            console.log(`[${currentTime}] Received from client: ${chunk.toString()}`);
        });
        // After receiving data from the client, we send it back in the response
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }
    else {
        // If the request method is not POST, we send the client the error "Method not allowed"
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method not allowed. Use a POST request.');
    }
    req.on('close', () => {
        console.log(`The session with client ${clientIp} was closed`);
    });
});
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running on the port: ${PORT}`);
});
