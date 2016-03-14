(function () {
  'use strict';
  angular
    .module('frontendApp')
    .controller('loggedInPageCtrl', LoggedInPageCtrl);

  function LoggedInPageCtrl($cookies, $http, servicePictures) {
    var vm1 = this;
    vm1.myPictures = servicePictures.myPictures;

    //request to backend the pictures
    $http.get('http://localhost:3000/api/filemanagement',
      {headers: {'Authorization': 'Bearer ' + $cookies.get('TokenMysite')}})
      .then(function successCallback(response) {
        servicePictures.addMyPictures(response.data);
      }, function errorCallback(err) {
        console.log(err)
      })
  }
})();
