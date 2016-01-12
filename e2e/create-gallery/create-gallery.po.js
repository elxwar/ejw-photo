/* global element, by */
'use strict';

function CreateGalleryPage() {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h1'));
  this.galleryName = element(by.model('createGalleryVm.gallery.name'));
  this.galleryDescription = element(by.model('createGalleryVm.gallery.description'));
  this.galleryThumbnail = element(by.model('createGalleryVm.gallery.thumbnail'));
  this.galleryPhotos = element(by.model('createGalleryVm.gallery.photos'));
  this.createGallery = element(by.buttonText('Create Gallery'));
  this.alert = element(by.css('.alert'));
}

module.exports = CreateGalleryPage;
