(function () {
  'use strict';

  /* @ngdoc object
   * @name mwCom
   * @description
   *
   */
  angular
    .module('mwCom', [
      'ui.router',
      'mgcrea.ngStrap',
      'ngAnimate',
      'ngPageTitle',
      'restangular',
      'home',
      'articles',
      'admin',
      'galleries',
      'pages'
    ]);
}());
