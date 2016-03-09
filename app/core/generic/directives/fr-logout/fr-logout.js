


(function () {
  'use strict';
  angular
    .module('frontendApp')
    .directive('frLogout', frLogout);

  // frLogin.$inject = [];
  function frLogout() {
    return {
      restrict: 'E',
      //scope: {},
      templateUrl: '/core/generic/directives/fr-logout/fr-logout.html',
      controller: frLogoutCtrl,
      controllerAs: 'logoutCtrl'
      //bindToController: true
    };

    function frLogoutCtrl($scope, $http, $cookies, servicePictures, $location) {
      var logoutCtrl = this;
      var token;
      //loginCtrl.userauthenticated = false;
      //loginCtrl.failedretries = 0;

      logoutCtrl.clickSubmit = function () {
        //request pictures
        $http.get('http://localhost:3000/api/filemanagement')
          .then(function successCallback(response) {
            servicePictures.addMyPictures(response.data);
          }, function errorCallback(err) {
            console.log(err)
          })
      }

      logoutCtrl.clearToken = function(){
        if ($cookies.get('TokenMysite')) {
          $cookies.remove('TokenMysite');
          console.log('Token removed!');
        } else {
          console.log('Token not removed!');
        }
        $location.path('/');
      }
    }

  }

})();



