(function () {
  'use strict';
  angular
    .module('frontendApp')
    .directive('frLogin', frLogin);

  // frLogin.$inject = [];
  function frLogin() {
    return {
      restrict: 'E',
      //scope: {},
      templateUrl: '/core/generic/directives/fr-login/fr-login.html',
      controller: frLoginCtrl,
      controllerAs: 'loginCtrl'
      //bindToController: true
    };

    function frLoginCtrl($scope) {
      var loginCtrl = this;
      loginCtrl.userauthenticated = false;
      loginCtrl.failedretries = 0;
      $scope.$watch('loginCtrl.userEmail', function (newValue, oldValue) {
        console.log(newValue);
      });
      loginCtrl.clickSubmit = function () {

        if (loginCtrl.userEmail === 'uitnecil@gmail.com' && loginCtrl.userPassword === 'admin') {
          console.log('user authenticated;');
          loginCtrl.userauthenticated = true;
        } else {
          loginCtrl.userauthenticated = false;
          loginCtrl.failedretries++
          if (loginCtrl.failedretries >= 3) {
            alert('You have failed to login 3 times or more.')
          }
        }

        console.log(loginCtrl.userauthenticated);
      }
    }
  }

})();