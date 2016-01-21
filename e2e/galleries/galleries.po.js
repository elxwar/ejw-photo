/* global element, by */
'use strict';

function GalleriesPage() {
  this.heading = element(by.tagName('h2'));
  this.galleries = element.all(by.repeater('gallery in galleriesVm.gsrv.galleries'));
  this.addGallery = element(by.buttonText('Add new Gallery'));
}

module.exports = GalleriesPage;
