/* global describe, beforeEach, it, browser, expect */
'use strict';

var GalleriesPagePo = require('./galleries.po');

describe('Galleries page', function () {
  var galleriesPage;

  beforeEach(function () {
    galleriesPage = new GalleriesPagePo();
    browser.get('/#/galleries');
  });

  it('should say GalleriesCtrl', function () {
    expect(galleriesPage.heading.getText()).toEqual('galleries');
  });
});
