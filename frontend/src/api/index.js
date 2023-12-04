var socket = new WebSocket("ws://localhost:8080/ws");

// Connection to server
let connect = () => {
    console.log("Attempting to conenct....");

    socket.onopen = () => {
        console.log("Successfully Connected!")
    }

    socket.onmessage = message => {
        console.log(message)
    }

    socket.onclose = event => {
        console.log("Connection Closed!", event)
    }

    socket.onerror = error => {
        console.log("Socket Error: ", error)
    }
}

let sendMessage = message => {
    console.log("Sending Message: ", message)
    socket.send(message)
}

export { connect, sendMessage };
 