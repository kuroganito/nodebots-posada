var socket_io =  require('socket.io');

module.exports = function(server) {
	var WATING = 0;
	var WATING_PLAYERS = 1;
	var GAME_START = 2;

	var players = [];

	var status;
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






		socket.on('newGame',function(){
			status = WATING_PLAYERS;
			chageStatus(status)
			var timer = 60;
			
			var interval = setInterval(function(){
					io.emit('countdown',timer);
					timer--;
					if(timer <0){
						clearInterval(interval);
						status = GAME_START;
						chageStatus(status)
					}
				}, 1000);
				
			
			

		})
	});


	function chageStatus(status){
		io.emit('chageStatus',status);	
	}

   
};