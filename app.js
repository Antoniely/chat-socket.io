
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);

//static public
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes

//Starting the server
const server = app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});

const socket = require('socket.io');
const io = socket(server);

// WebSocket
io.on('connection', (socket) => {
   console.log('new connection', socket.id);

  socket.on('chat:message', (data) => {
     io.sockets.emit('chat:message', data);
  });

  socket.on('chat:typing', (data)=>{
      socket.broadcast.emit('chat:typing', data);
  });
});





