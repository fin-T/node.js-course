import dgram from 'dgram';

// Creates a UDP server
let server = dgram.createSocket('udp4');

// Event handler "message", called when a message is received from the client
server.on('message', (msg, rinfo) => {
    // Gets the current date and time
    let currentTime = new Date().toLocaleTimeString();

    console.log(`Client IP: ${rinfo.address}`)
    console.log(`[${currentTime}] Received from client: "${msg}"`);

    server.send(Buffer.from(msg), 0, msg.length, rinfo.port, rinfo.address, (err) => {
        if (err) {
            console.error(`Error sending response: ${err}`);
        }
    });
    console.log("Client session closed.");
});

// "listening" event handler, called when the server starts
server.on('listening', () => {
    let address = server.address();
    console.log(`UDP server listening on ${address.address}:${address.port}`);
});

// Starts the server on port 12345
server.bind(12345);
