/* global element, by */
'use strict';

function AdminPage() {
  this.heading = element(by.tagName('h1'));
  this.tabs = element.all(by.repeater('tab in adminVm.tabs'));
  this.galleryTab = element(by.linkText('Galleries'));
  this.galleries = element.all(by.repeater('gallery in galleries'));
  this.addGallery = element(by.buttonText('Add new Gallery'));
  this.editGallery = element(by.buttonText('Edit'));
  this.articleTab = element(by.linkText('Articles'));
  this.addArticle = element(by.buttonText('Add new Article'));
  this.editArticle = element(by.buttonText('Edit'));
  this.pageTab = element(by.linkText('Pages'));
  this.addPage = element(by.buttonText('Add new Page'));
}

module.exports = AdminPage;
