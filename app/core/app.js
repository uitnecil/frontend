'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../core/pages/landing-page/landing-page.html',
        controller: 'landingPageCtrl',
        controllerAs: 'vm'
      })
      .when('/loggedin',{
        templateUrl: '../core/pages/logged-in/logged-in.html',
        controller: 'loggedInPageCtrl',
        controllerAs: 'vm1'
      })
      .when('/404', {
        templateUrl: '../core/pages/404/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  })

  //set CORS allow header -> to allow setting custom headers
  //.config([
  //  "$routeProvider",
  //  "$httpProvider",
  //  function($routeProvider, $httpProvider){
  //    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Custom-Header, Authorization';
  //  }
  //])
  //set token in header of all requests (including login)
  .run(function run( $http, $cookies ){
    $http.defaults.headers.common =
      {'Authorization': 'Bearer ' + $cookies.get('TokenMysite')};
  })
  //.config(['$httpProvider', function ($httpProvider) {
  //  $httpProvider.defaults.headers.common = {
  //    'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
  //    'Accept': 'application/json;odata=verbose'
  //  };
  //}])


  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('blue');

    $mdThemingProvider.theme('dark')
      .primaryPalette('lime')
      .accentPalette('blue')
      .dark();
  });
  //.run(['$httpProvider', function ($httpProvider, $cookies) {
  //  $httpProvider.defaults.headers.post['token'] = $cookies.get('TokenMysite');
  //}])



