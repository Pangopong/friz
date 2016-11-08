'use strict';

/**
 * @ngdoc overview
 * @name itsApp
 * @description
 * # itsApp
 *
 * Main module of the application.
 */
angular
  .module('itsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/company', {
        templateUrl: 'views/company.html',
        controller: 'CompanyCtrl',
        controllerAs: 'company'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      //html5 history API
      $locationProvider.html5Mode(true);
  });
