const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
// create a server off of app to allow use of express and socketio
const server = http.createServer(app);
// calling server on socketio
const io = socketio(server);

const port = process.env.ROUTE || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));


// connecting the server side with socketio
io.on('connection', (socket) => {
  console.log('new Websocket connection');

  socket.emit('message', 'Welcome!');

  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  });
});

server.listen(port, () => {
  console.log(`server is up on port ${port}!`);
});

