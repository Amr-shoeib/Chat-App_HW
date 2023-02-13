var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 3000;
var io = require('socket.io')(server);

server.listen(port, function(){
console.log("Listening on *:" + port)
});

app.use(express.static(__dirname));

app.get('/', function(request, response){
   
    response.sendFile(__dirname + '/index.html')
});

app.get('onlineusers', function (request, response){
    console.log(io.socket.adapter.rooms);
response.send(io.socket.adapter.rooms);
});

io.on('connection', function (socket){
console.log('A user connected:' +socket.id);
//Tell all users that someone connected
io.emit('user joined', socket.id);

// the user send chat messege to server
socket.on('chat.message', function(message){
    // emit this event to all users connected to it
    io.emit('chat.message', message);
})

socket.on ('disconect', function(){
console.log('user left:' + socket.id);
//Tell all users that someone disconnected
socket.broadcast.emit ('user left', socket.id);
});
});