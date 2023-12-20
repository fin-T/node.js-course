import http from 'http';

// The text we want to send to the server
let postData = 'Hello, server!';

// Request parameters
let options = {
    hostname: 'localhost',  // Server host (address)
    localAddress: '',
    port: 3000,             // Server port
    path: '/',               // Server request path
    method: 'POST',          // HTTP method (in this case, POST)
    headers: {
        'Content-Type': 'text/plain',                      // Content type (in this case, text)
        'Content-Length': Buffer.byteLength(postData),     // Length of data sent in request
    }
};

let dispatchTime = new Date().getTime();

// Create an HTTP request
let req = http.request(options, (res) => {
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
