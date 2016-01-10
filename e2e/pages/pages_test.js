/* global describe, beforeEach, it, browser, expect */
'use strict';

var PagesPagePo = require('./pages.po');

describe('Pages page', function () {
  var pagesPage;

  beforeEach(function () {
    pagesPage = new PagesPagePo();
    browser.get('/#/pages');
  });

  it('should say PagesCtrl', function () {
    expect(pagesPage.text.getText()).toEqual('PagesCtrl');
  });
});
