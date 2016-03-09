/**
 * Created by liz on 19.02.2016.
 */
(function () {
  'use strict';
  angular
    .module('frontendApp')
    .controller('loggedInPageCtrl', LoggedInPageCtrl);

  function LoggedInPageCtrl($scope, $http, servicePictures) {
    var vm1 = this;
    vm1.myPictures = servicePictures.myPictures;
    //$scope.$watch('vm.myPictures', function(newValue,oldValue){
    //    console.log(oldValue);
    //    console.log(newValue);
    //},true);
    //console.log(vm1.myPictures);

    //request to backend the pictures
    $http.get('http://localhost:3000/api/filemanagement')
      .then(function successCallback(response) {
        servicePictures.addMyPictures(response.data);
      }, function errorCallback(err) {
        console.log(err)
      })

  }
})();
