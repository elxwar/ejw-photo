/* global describe, beforeEach, it, browser, expect */
'use strict';

var CreateGalleryPagePo = require('./create-gallery.po');

describe('Create gallery page', function() {
  var createGalleryPage;

  beforeEach(function() {
    createGalleryPage = new CreateGalleryPagePo();
    browser.get('/#/create-gallery');
  });

  it('should have a page title', function() {
    expect(browser.getTitle()).toBe('Create Gallery');
  });

  it('should have heading Create New Gallery', function() {
    expect(createGalleryPage.heading.getText()).toBe('Create New Gallery');
  });

  it('should add a new gallery', function() {
    createGalleryPage.galleryName.sendKeys('Test Gallery');
    createGalleryPage.galleryDescription.sendKeys('Test gallery description...');
//    createGalleryPage.galleryThumbnail.sendKeys('http://pretend_images.com/an_image.jpg');
    createGalleryPage.createGallery.click();
    expect(browser.getCurrentUrl()).toContain('#/admin');
    expect(createGalleryPage.alert.isPresent());
    expect(createGalleryPage.alert.getText()).toBe('You have successfully created a new gallery');
  });
});
