(function () {
  'use strict';

  angular
    .module('sessions')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('sessions', {
        url: '/sessions',
        templateUrl: 'sessions/sessions.tpl.html',
        controller: 'SessionsCtrl',
        controllerAs: 'sessions'
      })
      .state('sessions-new', {
        url: '/log-in',
        templateUrl: 'sessions/new/sessions-new.tpl.html',
        controller: 'SessionsNewCtrl',
        controllerAs: 'sessionsNewVm'
      });
  }
}());
