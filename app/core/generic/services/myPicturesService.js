(function () {
  'use strict';
  angular
    .module('frontendApp')
    .factory('servicePictures', myPicturesService);

  function myPicturesService() {
    var factory = {};
    factory.myPictures = [];
    factory.addMyPictures = addPictures;
    factory.clearMyPictures = clearPictures;

    return factory;

    function addPictures(newset) {
      clearPictures();//empty the array
      //factory.myPictures = [] //empty the array //cannot be used because of external multiple references
      Array.prototype.push.apply(factory.myPictures, newset);
    }

    function clearPictures() {
      factory.myPictures.length = 0;
    }
  }
})();
