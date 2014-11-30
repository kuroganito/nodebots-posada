'use strict';

angular.module('nodebotsApp')
  .controller('PanelCtrl', function ($scope,socket) {
    
    $scope.startGame = function(){
    	socket.emit("newGame");
    } 


 });
