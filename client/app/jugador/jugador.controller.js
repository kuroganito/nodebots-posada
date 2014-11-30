'use strict';

angular.module('nodebotsApp')
  .controller('JugadorCtrl', function ($scope, socket) {
	
	var WATING = 0;
  	var WATING_PLAYERS = 1;
  	var GAME_START = 2;
	var WIN = 10;
	var LOST = 11;
	var WATING_PLAYER_MOVE =12;
	var DRAW = 13;
	var NAME_CHOSEN = 20;


	$scope.timer;
 	$scope.statusMsg = "";
  	$scope.status = WATING;
  	setStatus();

	$scope.sendName = function(){
		socket.emit('newPlayer',{name:$scope.name});
	}

 	socket.on("countdown",function(timer){
         $scope.timer = timer;               
  	});

  	socket.on("winSocket",function(){
         $scope.status = WIN;
         setStatus();             
      });

  	socket.on("chageStatus",function(status){
         $scope.status = status;
         setStatus();
      });

	function setStatus(){
		switch ($scope.status){
			case WATING:
				$scope.statusMsg = "Esperado"
				break;
			case WATING_PLAYERS:
				$scope.statusMsg = "Ahora te puedes conectar: "
				break;
			case GAME_START:
				$scope.statusMsg = "Comienza el juego"
				$scope.timer = "";
				break;
			case WIN:
				$scope.statusMsg = "Tu ganas esta ronda, espera la siguiente";
				break;
			case NAME_CHOSEN:
				$scope.statusMsg = "Esperando a los demas";
				break;
		}        
	}

  });
