/* global describe, beforeEach, it, browser, expect */
'use strict';

var EditGalleryPagePo = require('./edit-gallery.po');

describe('Edit gallery page', function () {
  var editGalleryPage;

  beforeEach(function () {
    editGalleryPage = new EditGalleryPagePo();
    browser.get('/#/edit-gallery/:name');
  });

  it('should say EditGalleryCtrl', function () {
    expect(editGalleryPage.heading.getText()).toEqual('Edit Gallery');
    expect(editGalleryPage.text.getText()).toEqual('EditGalleryCtrl');
  });
});
