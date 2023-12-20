"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dgram_1 = __importDefault(require("dgram"));
// Создаем UDP-сервер
let server = dgram_1.default.createSocket('udp4');
let clients = new Map(); // Словарь для отслеживания клиентов
// Обработчик события "message", вызывается при получении сообщения от клиента
server.on('message', (msg, rinfo) => {
    // Получение текущей даты и времени
    let currentTime = new Date().toLocaleTimeString();
    console.log(`Client IP: ${rinfo.address}`);
    console.log(`[${currentTime}] Received from client: "${msg}"`);
    server.send(Buffer.from(msg), 0, msg.length, rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Ошибка при отправке ответа: ${err}`);
        }
    });
    console.log("Client session closed.");
});
// Обработчик события "listening", вызывается при запуске сервера
server.on('listening', () => {
    let address = server.address();
    console.log(`UDP server listening on ${address.address}:${address.port}`);
});
// Запускаем сервер на порту 12345
server.bind(12345);
