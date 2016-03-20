(function () {
  'use strict';
  angular
    .module('frontendApp')
    .directive('frMidMenu', frMidMenu);

  frMidMenu.$inject = ['$cookies', '$location'];
  function frMidMenu($cookies, $location) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/core/generic/directives/fr-midmenu/fr-midmenu.html',
      controller: midMenuCtrl,
      controllerAs: 'midMenuCtrl'
      //bindToController: true
    };

    function midMenuCtrl() {
      var midMenuCtrl = this;
      midMenuCtrl.addNewUser = function () {
        if (midMenuCtrl.userEmail !== null && midMenuCtrl.userPassword !== null) {
          $http.post('http://localhost:3000/api/users', {email: midMenuCtrl.userEmail, password: midMenuCtrl.userPassword})
            .then(function successCallback(response) {

              //save token to cookies for storage
              $cookies.put('TokenMysite', response.data.token);
              $location.path('/loggedin')

            }, function errorCallback(err) {
              midMenuCtrl.loginError = 'Invalid credentials ?' + err ;
            });
          midMenuCtrl.userauthenticated = true;
        }
        }
      }
    }
})();



