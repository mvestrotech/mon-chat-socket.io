var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/", express.static(__dirname + "/public"));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

http.listen(3000, function(){
    console.log('Mon serveur écoute sur le port *:3000');
});

io.on('connection', function(socket){
    console.log('Je vous informe qu\'il y a un nouvel utilisateur');
    socket.on('disconnect', function(){
        console.log('Je vous informe qu\'un utilisateur est partie');
    });

    socket.on('message', function (message) {
        io.emit('message', message);
    });
});