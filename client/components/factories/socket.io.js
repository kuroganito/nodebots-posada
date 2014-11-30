'use strict';

angular.module('nodebotsApp')
	.factory('socket', function ($rootScope) {
	  var socket = io.connect();
	  return {
	    on: function (eventName, callback) {
	      console.log("Reciviendo: " + eventName )
	      socket.on(eventName, function () {  
	        var args = arguments;
	        $rootScope.$apply(function () {
	          callback.apply(socket, args);
	        });
	      });
	    },
	    emit: function (eventName, data, callback) {
		  console.log("Emitiendo: " + eventName )
	      socket.emit(eventName, data, function () {
	        var args = arguments;
	        $rootScope.$apply(function () {
	          if (callback) {
	            callback.apply(socket, args);
	          }
	        });
	      })
	    }
	  };
	});