(function () {
  'use strict';

  angular
    .module('mwCom')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
