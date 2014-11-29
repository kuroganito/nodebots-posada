'use strict';

angular.module('nodebotsApp')
  .controller('JugadorCtrl', function ($scope, socket) {
   		$scope.sendName = function(){
   			socket.emit('newPlayer',{name:$scope.name},function(){

   			});
   		}
  });
