/**
 * Created by liz on 19.02.2016.
 */
(function () {
  'use strict';
  angular
    .module('frontendApp')
    .controller('landingPageCtrl', LandingPageCtrl);

  function LandingPageCtrl($scope, servicePictures) {
    var vm = this;
    vm.myPictures = servicePictures.myPictures;
    //$scope.$watch('vm.myPictures', function(newValue,oldValue){
    //    console.log(oldValue);
    //    console.log(newValue);
    //},true);
  }
})();
