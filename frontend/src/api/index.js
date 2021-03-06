var socket = new WebSocket("wss://realtime-chat-go-react.herokuapp.com/ws");

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