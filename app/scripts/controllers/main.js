'use strict';

/**
 * @ngdoc function
 * @name itsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itsApp
 */
angular.module('itsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $timeout) {
    $scope.viewTransition = function(){
    	
    	$scope.anim = "anim";

        function changeView(){$location.path('/company');}

        $timeout(changeView, 3000);
    }
    	


    $rootScope.li1 = 'iactive';
    $rootScope.li2 = 'iactive';
  });
