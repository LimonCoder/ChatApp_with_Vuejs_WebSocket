const express = require('express');

const app = express();

const http = require('http');

const expresSserver = http.createServer(app);

const {Server} = require("socket.io");

const io = new Server(expresSserver);

io.on('connection', function (socket) {

    socket.on('chat', (msg) => {
        socket.broadcast.emit('chat_transfer', msg);
    })

    socket.on('typing', (username) => {
        socket.broadcast.emit('typing',username);
    })

    socket.on('StopTyping', () => {
        socket.broadcast.emit('StopTyping');
    })


})

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
})


expresSserver.listen(8000, function () {
    console.log("server runng @ 8000")
})