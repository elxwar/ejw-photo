/* global describe, beforeEach, it, browser, expect */
'use strict';

var CreateGalleryPagePo = require('./create-gallery.po');

describe('Create gallery page', function () {
  var createGalleryPage;

  beforeEach(function () {
    createGalleryPage = new CreateGalleryPagePo();
    browser.get('/#/create-gallery');
  });

  it('should have a page title', function() {
    expect(browser.getTitle()).toBe('Create Gallery');
  });

  it('should have heading Create New Gallery', function() {
    expect(adminPage.heading.getText()).toBe('Create New Gallery');
  });
});
