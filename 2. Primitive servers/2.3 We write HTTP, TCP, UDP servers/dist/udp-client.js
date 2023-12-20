"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = __importDefault(require("dgram"));
// Создаем UDP-клиент
let client = dgram_1.default.createSocket('udp4');
// Сообщение, которое отправляем серверу
let message = 'Hi, UDP-server!';
let dispatchTime = new Date().getTime();
// IP-адрес и порт сервера
let serverIP = '127.0.0.1';
let serverPort = 12345;
// Преобразуем сообщение в буфер
let buffer = Buffer.from(message);
// Отправляем сообщение серверу
client.send(buffer, 0, buffer.length, serverPort, serverIP, (err) => {
    if (err) {
        console.error(`Error sending message: ${err}`);
    }
    else {
        console.log(`Message sent to server: ${message}`);
    }
});
// Обработка сообщения от сервера
client.on('message', (msg, rinfo) => {
    let receiptTime = new Date().getTime();
    console.log(`Received message from server: ${msg} from ${rinfo.address}:${rinfo.port}`);
    msg.toString() === message ? console.log("Received the same text that was sent.") :
        console.log("Received a different text from the one that was sent.");
    let totalDataExchangeTime = receiptTime - dispatchTime;
    console.log("The total time it took to transfer data and receive it back: " + totalDataExchangeTime + "ms.");
    // Закрываем клиент после отправки
    client.close();
});
