(function() {
  'use strict';

  /* @ngdoc object
   * @name mwCom
   * @description
   *
   */
  angular
      .module('mwCom', [
        'ui.router',
        'ngSanitize',
        'mgcrea.ngStrap',
        'ngAnimate',
//        'ngMockE2E',
        'ngPageTitle',
        'ng-token-auth',
        'restangular',
        'environment',
        'angular-ladda',
        'infinite-scroll',
        'home',
        'articles',
        'admin',
        'galleries',
        'pages',
        'toaster',
        'sessions'
      ]);
}());

