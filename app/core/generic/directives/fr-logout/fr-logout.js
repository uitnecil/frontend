(function () {
  'use strict';
  angular
    .module('frontendApp')
    .directive('frLogout', frLogout);

  frLogout.$inject = ['$cookies', 'servicePictures', '$location'];
  function frLogout($cookies, servicePictures, $location) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/core/generic/directives/fr-logout/fr-logout.html',
      controller: frLogoutCtrl,
      controllerAs: 'logoutCtrl'
      //bindToController: true
    };

    function frLogoutCtrl() {
      var logoutCtrl = this;

      logoutCtrl.clearToken = function () {
        if ($cookies.get('TokenMysite')) {
          $cookies.remove('TokenMysite');
          servicePictures.clearMyPictures();//clear the array holding the Pictures from the service
        }
        $location.path('/');
      }
    }
  }
})();



