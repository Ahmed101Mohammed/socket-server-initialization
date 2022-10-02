// Modules:
const express = require('express');
const path = require('path');
const ioSocket = require('socket.io');
const http = require('http');

// Create the socket server:
const app = express();
const server =  http.createServer(app);
const io = new ioSocket.Server(server);

// Middilewares:
app.use(express.static(path.join(__dirname,'public')));

// Routes:
app.use(`''||'home'`,require(path.join(__dirname,'routers','index.js')));

// io server:
io.on('connection',(socket)=>{
    console.log('An client is connected to the socket server...');





    // Code Your Program here....







})


// Listen the server:
const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log(`The Server is runing at port: ${PORT}.....`)
})

