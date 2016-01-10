(function () {
  'use strict';

  angular
    .module('articles')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'articles/articles.tpl.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articlesVm'
      })
      .state('createArticle', {
        url: '/create-article',
        templateUrl: 'articles/create-article.tpl.html',
        controller: 'CreateArticleCtrl',
        controllerAs: 'createArticleVm'
      });
  }
}());
