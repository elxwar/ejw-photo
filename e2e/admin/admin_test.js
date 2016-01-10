/* global describe, beforeEach, it, browser, expect */
'use strict';

var AdminPagePo = require('./admin.po');

describe('Admin page', function() {
  var adminPage;

  beforeEach(function() {
    adminPage = new AdminPagePo();
    browser.get('/#/admin');
  });

  it('should have a page title', function() {
    expect(browser.getTitle()).toBe('Photo Site Admin');
  });

  it('should have heading Site Admin', function() {
    expect(adminPage.heading.getText()).toBe('Site Admin');
  });

  it('should have a tab for galleries', function() {
    expect(adminPage.tabs.get(0).getAttribute('title')).toBe('Galleries');
  });

  it('should have a tab for Pages', function() {
    expect(adminPage.tabs.get(1).getAttribute('title')).toBe('Pages');
  });

  it('should have a tab for Articles', function() {
    expect(adminPage.tabs.get(2).getAttribute('title')).toBe('Articles');
  });

  it('should be able to add a new gallery', function() {
    adminPage.addGallery.click();
    expect(browser.getCurrentUrl()).toContain('#/create-gallery');
  });

//  it('should be able to edit a gallery', function() {
//    adminPage.editGallery.click();
//    expect(browser.getCurrentUrl()).toContain('#/edit_gallery');
//  });

  it('should be able to add a new article', function() {
    adminPage.articleTab.click();
    adminPage.addArticle.click();
    expect(browser.getCurrentUrl()).toContain('#/create-article');
  });

//  it('should be able to edit an article', function() {
//    adminPage.editGallery.click();
//    expect(browser.getCurrentUrl()).toContain('#/edit_gallery');
//  });

  it('should be able to see a list of pages', function() {
    adminPage.pageTab.click();
  });
});
