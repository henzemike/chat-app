// calling io will connect to the client side to the server
const socket = io();


socket.on('message', (message) => {
  console.log(message);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // using the parameter e then grabbign the targets element which has acces to the name message and grabbing its value
  const message = e.target.elements.message.value;

  socket.emit('sendMessage', message);
});