'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('SectionCtrl2', function ($scope, $rootScope, $location, $timeout) {
    $scope.x = 5;

    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
    $rootScope.li3 = 'active';
  });