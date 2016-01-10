/* global describe, beforeEach, it, browser, expect */
'use strict';

var CreateGalleryPagePo = require('./create-gallery.po');

describe('Create gallery page', function () {
  var createGalleryPage;

  beforeEach(function () {
    createGalleryPage = new CreateGalleryPagePo();
    browser.get('/#/create-gallery');
  });

  it('should say CreateGalleryCtrl', function () {
    expect(createGalleryPage.heading.getText()).toEqual('createGallery');
    expect(createGalleryPage.text.getText()).toEqual('CreateGalleryCtrlVm');
  });
});
