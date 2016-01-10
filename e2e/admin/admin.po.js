/* global element, by */
'use strict';

function AdminPage() {
  this.heading = element(by.tagName('h2'));
  this.tabs = element.all(by.repeater('tab in tabs'));
  this.galleries = element.all(by.repeater('gallery in galleries'));
  this.addGallery = element(by.buttonText('Add new Gallery'));
  this.editGallery = element(by.buttonText('Edit'));
}

module.exports = AdminPage;