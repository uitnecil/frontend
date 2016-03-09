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

    function frLoginCtrl($scope, $http, $cookies, servicePictures, $location) {
      var loginCtrl = this;
      var token;
      //loginCtrl.userauthenticated = false;
      //loginCtrl.failedretries = 0;

      loginCtrl.clickSubmit = function () {
        //if user email and user password are not null do the post
        if (loginCtrl.userEmail != null && loginCtrl.userPassword !== null) {
          $http.post('http://localhost:3000/api/login', {email: loginCtrl.userEmail, password: loginCtrl.userPassword})
            .then(function successCallback(response) {
              console.log(response);
              console.log(response.data.token);
              //save token to cookies for storage
              $cookies.put('TokenMysite', response.data.token);

              $location.path('/loggedin')
              ////request pictures
              //$http.get('http://localhost:3000/api/filemanagement')
              //  .then(function successCallback(response) {
              //    servicePictures.addMyPictures(response.data);
              //  }, function errorCallback(err) {
              //    console.log(err)
              //  })

            }, function errorCallback(err) {
              console.log(err);
              loginCtrl.loginError = 'Invalid credentials ?'
            });

          loginCtrl.userauthenticated = true;
        }
        //} else {
        //  loginCtrl.userauthenticated = false;
        //  loginCtrl.failedretries++
        //  if (loginCtrl.failedretries >= 3) {
        //    alert('You have failed to login 3 times or more.')
        //  }
        //}
        //
        //console.log(loginCtrl.userauthenticated);
      }


    }
  }

})();
