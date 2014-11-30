'use strict';

angular.module('nodebotsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('panel', {
        url: '/panel',
        templateUrl: 'app/panel/panel.html',
        controller: 'PanelCtrl'
      });
  });