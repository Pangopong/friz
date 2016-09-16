'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:OurCtrl
 * @description
 * # OurCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('OurCtrl', function ($scope, $rootScope) {
  	$rootScope.li1 = 'iactive';
    $rootScope.li2 = 'active';
    $rootScope.li3 = 'iactive';
  });
