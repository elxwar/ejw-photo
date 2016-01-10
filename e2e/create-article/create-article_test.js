/* global describe, beforeEach, it, browser, expect */
'use strict';

var CreateArticlePagePo = require('./create-article.po');

describe('Create article page', function () {
  var createArticlePage;

  beforeEach(function () {
    createArticlePage = new CreateArticlePagePo();
    browser.get('/#/create-article');
  });

  it('should say CreateArticleCtrl', function () {
    expect(createArticlePage.heading.getText()).toEqual('createArticle');
    expect(createArticlePage.text.getText()).toEqual('CreateArticleCtrl');
  });
});
