"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
// The text we want to send to the server
let postData = 'Hello, server!';
// Request parameters
let options = {
    hostname: 'localhost',
    localAddress: '',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(postData), // Length of data sent in request
    }
};
let dispatchTime = new Date().getTime();
// Create an HTTP request
let req = http_1.default.request(options, (res) => {
    let receiptTime = new Date().getTime();
    let data = '';
    // Processing data received from the server
    res.on('data', (chunk) => {
        data += chunk;
    });
    // Handling completion of response from server
    res.on('end', () => {
        console.log(`Received from server: ${data}`);
        data === postData ? console.log("Received the same text that was sent.") :
            console.log("Received a different text from the one that was sent.");
        let totalDataExchangeTime = receiptTime - dispatchTime;
        console.log("The total time it took to transfer data and receive it back: " + totalDataExchangeTime + "ms.");
    });
});
// Handling an error when sending a request
req.on('error', (error) => {
    console.error(`Error sending request: ${error.message}`);
});
// Sending text data to the server
req.write(postData);
req.end();
