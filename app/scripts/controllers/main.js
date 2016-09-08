'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    $scope.viewTransition = function(){
    	//setTimeout(function(){$location.path('/company')}, 2000);
    	
    	$scope.anim = "anim";
    	console.log("button pressed");
    }
    	//$location.path('/company');


    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
  });
