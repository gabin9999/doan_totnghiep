const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: { oirgin: "*"}
});

io.on('connection', (socket)=>{
    console.log('Connection');

    socket.on('test', ()=>{
        console.log(9999);
    })

    socket.on('disconnect', (socket) =>{
        console.log('Disconnect');
    });
});

server.listen(3000, () =>{
    console.log('Server is running');
});


