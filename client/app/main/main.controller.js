'use strict';

angular.module('nodebotsApp')
  .controller('MainCtrl', function ($scope, $http,socket) {
   	$scope.players = [[]];
   	$scope.rounds = [];
   	socket.on("playerJoined",function(player){
   		$scope.players[0].push(player);
   		calculateRounds();
   	});


   	function calculateRounds(){
   		console.log("Calculando rondas")
   		if($scope.players[0].length>0 &&  $scope.rounds.length == 0){
   			$scope.rounds.unshift("Ganador");
   			$scope.players.push([]);
   		}
   		if($scope.players[0].length>1 &&  $scope.rounds.length == 1){
   			$scope.rounds.unshift("Final");
   			$scope.players.push([]);
   		}
   		if($scope.players[0].length>2 && $scope.rounds.length == 2){
   			$scope.rounds.unshift("Semifinal");
   			$scope.players.push([]);
   		}
   		if($scope.players[0].length>4 && $scope.rounds.length == 3){
   			$scope.rounds.unshift("Cuartos");
   			$scope.players.push([]);
   		}
   		if ($scope.players[0].length>8 && $scope.rounds.length == 4){
   			$scope.rounds.unshift("Octavos");
   			$scope.players.push([]);
   		}
   		if ($scope.players[0].length>16 && $scope.rounds.length == 5){
   			$scope.rounds.unshift("Eliminatorias 16");
   			$scope.players.push([]);
   		}
   		if ($scope.players[0].length>32 && $scope.rounds.length == 6){
   			$scope.rounds.unshift("Eliminatorias 32");
   			$scope.players.push([]);
   		}
   		if ($scope.players[0].length>64 && $scope.rounds.length == 7){
   			$scope.rounds.unshift("Eliminatorias 64");
   			$scope.players.push([]);
   		}
   			
   		
   	
   	}

   

  });
