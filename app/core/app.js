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
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../core/pages/landing-page/landing-page.html',
        controller: 'landingPageCtrl',
        controllerAs: 'vm'
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
      .primaryPalette('lime')
      .accentPalette('blue');

    $mdThemingProvider.theme('dark')
      .primaryPalette('lime')
      .accentPalette('blue')
      .dark();
  });

