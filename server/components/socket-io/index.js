var socket_io =  require('socket.io');

module.exports = function(server) {
	var WATING = 0;
	var WATING_PLAYERS = 1;
	var GAME_START = 2;
	var NAME_CHOSEN = 20;


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
				socket.emit('chageStatus',NAME_CHOSEN);
				io.emit('playerJoined',{name:socket.name,id:socket.id});
			}

		});






		socket.on('newGame',function(){
			status = WATING_PLAYERS;
			chageStatus(status)
			var timer = 30;
			
			var interval = setInterval(function(){
					io.emit('countdown',timer);
					timer--;
					if(timer <0){
						clearInterval(interval);
						status = GAME_START;
						chageStatus(status);
						sendVersus();
					}
				}, 1000);
				
			
			

		})
	});

	function sendWin(socket){
		socket.emit('winSocket');  
		io.emit('win',socket.id);
	}

	function sendVersus(){
		console.log(players.length);
		if(players.length % 2 !=0){
			var playerWinDefault = players[Math.floor( (Math.random() * players.length) )];
			console.log(playerWinDefault.name)
			playerWinDefault.alreadyPlay = true;
			sendWin(playerWinDefault) ; 
		}
		players.forEach(function(player){
  
		});
	}


	function chageStatus(status){
		io.emit('chageStatus',status);	
	}

   
};