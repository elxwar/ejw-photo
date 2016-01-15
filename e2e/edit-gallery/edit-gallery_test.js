/* global describe, beforeEach, it, browser, expect */
'use strict';

var EditGalleryPagePo = require('./edit-gallery.po');

describe('Edit gallery page', function () {
  var editGalleryPage;

  beforeEach(function () {
    editGalleryPage = new EditGalleryPagePo();
    browser.get('/#/edit-gallery/:name');
  });

  it('should have a page title', function() {
    expect(browser.getTitle()).toBe('Edit Gallery');
  });

  it('should have heading Edit Gallery', function() {
    expect(editGalleryPage.heading.getText()).toBe('Edit Gallery');
  });
//  it('should add a new gallery', function() {
//    createGalleryPage.galleryName.sendKeys('Test Gallery');
//    createGalleryPage.galleryDescription.sendKeys('Test gallery description...');
// //    createGalleryPage.galleryThumbnail.sendKeys('http://pretend_images.com/an_image.jpg');
//    createGalleryPage.createGallery.click();
//    expect(browser.getCurrentUrl()).toContain('#/admin');
//    expect(createGalleryPage.alert.isPresent());
//    expect(createGalleryPage.alert.getText()).toBe('Gallery Created');
//  });
});
