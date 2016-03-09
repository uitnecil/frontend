(function () {
  'use strict';
  angular
    .module('frontendApp')
    .factory('servicePictures', myPicturesService);

  function myPicturesService() {
    var factory = {};
    factory.myPictures = [];
    factory.addMyPictures = addPictures;
    return factory;

    function addPictures(newset){
      factory.myPictures.length = 0 //empty the array
      Array.prototype.push.apply(factory.myPictures, newset);
    }
  }
})();
