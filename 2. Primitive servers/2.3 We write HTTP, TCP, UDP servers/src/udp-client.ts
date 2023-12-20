import dgram from 'dgram';

// Creates a UDP client
let client = dgram.createSocket('udp4');

// Message sent to the server
let message = 'Hi, UDP-server!';
let dispatchTime = new Date().getTime();

// Server IP address and port
let serverIP = '127.0.0.1';
let serverPort = 12345;

// Converts a message to a buffer
let buffer = Buffer.from(message);

// Sends a message to the server
client.send(buffer, 0, buffer.length, serverPort, serverIP, (err) => {
    if (err) {
        console.error(`Error sending message: ${err}`);
    } else {
        console.log(`Message sent to server: ${message}`);
    }

});

// Processing a message from the server
client.on('message', (msg, rinfo) => {
    let receiptTime = new Date().getTime();
    console.log(`Received message from server: ${msg} from ${rinfo.address}:${rinfo.port}`);
    msg.toString() === message ? console.log("Received the same text that was sent.") :
        console.log("Received a different text from the one that was sent.");
    let totalDataExchangeTime = receiptTime - dispatchTime;
    console.log("The total time it took to transfer data and receive it back: " + totalDataExchangeTime + "ms.");
    // Close the client after sending
    client.close();
});
