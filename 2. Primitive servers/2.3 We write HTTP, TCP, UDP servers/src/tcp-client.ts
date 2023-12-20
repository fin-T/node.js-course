import net from "net";

let client = new net.Socket();

let port = 3000;
let host = "127.0.0.1";

let sentText = "Hi, there!";
let dispatchTime = new Date().getTime();

client.connect(port, host, () => {
    console.log("Connected to server.");
    client.write(sentText);
});

client.on('data', (receivedText) => {
    let receiptTime = new Date().getTime();
    console.log(`Received from server: ${receivedText}`);
    receivedText.toString() === sentText ? console.log("Received the same text that was sent.") :
        console.log("Received a different text from the one that was sent.");
    let totalDataExchangeTime = receiptTime - dispatchTime;
    console.log("The total time it took to transfer data and receive it back: " + totalDataExchangeTime + "ms.");
});

client.on('end', () => {
    console.log("Disconnected from server.");
});
