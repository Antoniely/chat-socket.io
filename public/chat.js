const socket = io();

// DOM elements
let output = document.getElementById('output');
let actions = document.getElementById('actions');
let username = document.getElementById('username');
let message = document.getElementById('message');
let btn = document.getElementById('send');

btn.addEventListener('click', () => {
   socket.emit('chat:message', {
       username: username.value,
       message: message.value
   });
});

message.addEventListener('keypress', () => {
   socket.emit('chat:typing', username.value)
});

socket.on('chat:message', (data)=>{
    message.value = '';
    actions.innerHTML = '';
   output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
</p>`
});

socket.on('chat:typing', data => {
   actions.innerHTML = `<p><em>${data} is typing a message...</em></p>`
});
