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

    function frLoginCtrl($http, $cookies, $location) {
      var loginCtrl = this;

      loginCtrl.clickSubmit = function () {
        //if user email and user password are not null do the post
        if (loginCtrl.userEmail != null && loginCtrl.userPassword !== null) {
          $http.post('http://localhost:3000/api/login', {email: loginCtrl.userEmail, password: loginCtrl.userPassword})
            .then(function successCallback(response) {

              //save token to cookies for storage
              $cookies.put('TokenMysite', response.data.token);
              $location.path('/loggedin')
            }, function errorCallback(err) {
                loginCtrl.loginError = 'Invalid credentials ?' + err ;
            });
          loginCtrl.userauthenticated = true;
        }
      }
    }
  }

})();
