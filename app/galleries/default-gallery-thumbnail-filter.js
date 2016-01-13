(function () {
  'use strict';

  /**
   * @ngdoc filter
   * @name galleries.filter:defaultGalleryThumbnail
   *
   * @description
   *
   * @param {Array} input The array to filter
   * @returns {Array} The filtered array
   *
   */
  angular
    .module('galleries')
    .filter('defaultGalleryThumbnail', defaultGalleryThumbnail);

  function defaultGalleryThumbnail() {
    return function (thumbnail, defaultThumbnail) {
      if (!thumbnail) {
        return defaultThumbnail;
      }
      return thumbnail;
    };
  }
}());

