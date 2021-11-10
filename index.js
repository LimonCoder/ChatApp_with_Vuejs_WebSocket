const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

app.get('/', function (request, response) {
   response.sendFile(__dirname+"/index.html");
})


server.listen(8000, function () {
    console.log("server runng @ 8000")
})