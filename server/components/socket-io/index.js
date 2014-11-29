var socket_io =  require('socket.io');

module.exports = function(server) {
	var players = [];

	var io = socket_io(server);

	io.on('connection', function(socket){
		socket.on('newPlayer', function(body){
			var existPlayer = false;
			players.forEach(function(player){
				if(player.id == socket.id)
					existPlayer = true;
			});
			if(!existPlayer){
				socket.name = body.name;
				players.push(socket);
				io.emit('playerJoined',{name:socket.name,id:socket.id});
			}

		});
	});

   
};