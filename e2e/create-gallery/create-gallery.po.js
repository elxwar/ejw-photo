/* global element, by */
'use strict';

function CreateGalleryPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h1'));
  this.galleryName = element(by.model('gallery.name'));
  this.galleryDescription = element(by.model('gallery.description'));
  this.galleryThumbnail = element(by.model('gallery.thumbnail'));
  this.galleryPhotos = element(by.model('gallery.photos'));
  this.createGallery = element(by.buttonText('Create Gallery'));
  this.alert = element(by.css('.alert'));
}

module.exports = CreateGalleryPage;
