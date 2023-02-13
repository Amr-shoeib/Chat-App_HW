var express = require('express');
var app = express();
var server = require('http').Server(app);

server.listen(port, function(){
console.log("Listening on *:" + port)
});