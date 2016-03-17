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
      .when('/loggedin', {
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

  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('lime');

    $mdThemingProvider.theme('dark')
      .primaryPalette('amber')
      .accentPalette('lime')
      .dark();
  });



