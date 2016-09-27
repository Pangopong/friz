'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('AboutCtrl', function ($rootScope, $scope) {
    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'active';
    $rootScope.li3 = 'iactive';
  });
