var socket = new WebSocket("ws://localhost:8080/ws");
// var socket = new WebSocket("ws://ip172-18-0-84-c6238bfqf8u000ddje0g-80.direct.labs.play-with-docker.com/ws");

let connect = cb => {
    console.log("Attempting to connect..");

    socket.onopen = () => {
        console.log("Socket Successfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("Socket Connection Closed: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
};

let sendMsg = msg => {
    console.log("sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };