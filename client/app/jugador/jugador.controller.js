'use strict';

angular.module('nodebotsApp')
  .controller('JugadorCtrl', function ($scope, socket) {
	
	var WATING = 0;
  	var WATING_PLAYERS = 1;
  	var GAME_START = 2;
	
	$scope.timer;
 	$scope.statusMsg = "";
  	$scope.status = WATING;
  	setStatus();

	$scope.sendName = function(){
		socket.emit('newPlayer',{name:$scope.name},function(){

		});
	}

 	socket.on("countdown",function(timer){
         $scope.timer = timer;               
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
		}        
	}

  });
