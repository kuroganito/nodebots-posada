'use strict';

angular.module('nodebotsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('jugador', {
        url: '/jugador',
        templateUrl: 'app/jugador/jugador.html',
        controller: 'JugadorCtrl'
      });
  });