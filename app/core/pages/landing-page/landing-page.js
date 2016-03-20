/**
 * Created by liz on 19.02.2016.
 */
(function () {
  'use strict';
  angular
    .module('frontendApp')
    .controller('landingPageCtrl', LandingPageCtrl);

  function LandingPageCtrl(servicePictures) {
    var vm = this;
    vm.myPictures = servicePictures.myPictures;
    vm.createNewUser = false;
  }
})();
